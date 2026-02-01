# GCP Deployment Guide for shaggy-star (Dockerized)

This guide details how to deploy your Astro static site to a Google Cloud Platform (GCP) Compute Engine instance using a self-contained Docker image (Nginx + Static Assets).

## Prerequisites
- A Google Cloud Platform account.
- A project created in GCP.
- A domain name (optional but recommended).

---

## Step 1: Create a VM Instance

1.  Go to the **Google Cloud Console** > **Compute Engine** > **VM instances**.
2.  Click **Create Instance**.
3.  **Name:** `shaggy-star-web`.
4.  **Region:** Choose `asia-east1` (Taiwan) or your preferred region.
5.  **Machine configuration:**
    -   **Series:** E2
    -   **Machine type:** `e2-micro` (Free tier eligible) or `e2-small`.
6.  **Boot disk:** Ubuntu 22.04 LTS (10 GB).
7.  **Firewall:** Allow HTTP and HTTPS traffic.
8.  Click **Create**.

---

## Step 2: Server Setup (SSH)

1.  Connect via **SSH**.
2.  **Update & Install Docker:**
    ```bash
    sudo apt update && sudo apt upgrade -y
    sudo apt install -y docker.io
    sudo usermod -aG docker $USER
    # Log out and log back in for permissions to apply
    exit
    ```
    *(Reconnect via SSH)*

3.  **(Optional) Setup Swap Memory:**
    *Recommended for e2-micro instances.*
    ```bash
    sudo fallocate -l 1G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    ```

---

## Step 3: Deploy Code (Docker Strategy)

1.  **Clone Repository:**
    ```bash
    git clone <YOUR_GITHUB_REPO_URL> blog
    cd blog
    ```

2.  **Build Docker Image:**
    This uses the `Dockerfile` in the root directory. It builds the Astro site and packages it with Nginx.
    ```bash
    docker build -t shaggy-star-app .
    ```

3.  **Run Container:**
    Run the container in the background, mapping port 80 of the container to port 80 of the host.
    ```bash
    # Stop/Remove existing container if updating
    # Stop/Remove existing container if updating (Silence errors if it doesn't exist)
    docker rm -f web 2>/dev/null || true
    
    # Run new container
    docker run -d --name web -p 80:80 shaggy-star-app
    ```

---

## Step 4: HTTPS Setup (SSL)

To enable HTTPS with this Docker setup, you have two main options:

### Option A: Reverse Proxy on Host (Recommended for Flexibility)
Run Nginx on the **VM Host** (not in Docker) to handle SSL, then proxy traffic to your Docker container.

1.  **Install Certbot on Host:**
    ```bash
    sudo apt install -y nginx certbot python3-certbot-nginx
    ```
2.  **Configure Host Nginx:**
    Edit `/etc/nginx/sites-available/default`:
    ```nginx
    server {
        listen 80;
        server_name yourdomain.com; 

        location / {
            proxy_pass http://localhost:8080; # Map to Docker port
            proxy_set_header Host $host;
        }
    }
    ```
3.  **Run Docker on Port 8080:**
    ```bash
    docker run -d --name web -p 8080:80 shaggy-star-app
    ```
4.  **Enable SSL:**
    ```bash
    sudo certbot --nginx -d yourdomain.com
    ```

### Option B: Cloud Load Balancer (Recommended for Production)
Use GCP Load Balancer to handle SSL certificates and direct traffic to your VM instance group.

---

## Step 5: Update Workflow

When you have new changes:

1.  **SSH into VM.**
2.  **Pull & Rebuild:**
    ```bash
    cd blog
    git pull
    docker build -t shaggy-star-app .
    # Stop/Remove existing container if updating (Silence errors if it doesn't exist)
    docker rm -f web 2>/dev/null || true
    docker run -d --name web -p 80:80 shaggy-star-app
    # (Or -p 8080:80 if using Host Nginx Proxy)
    ```