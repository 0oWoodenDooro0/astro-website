---
filename: '.zshrc'
language: 'bash'
description: 'My ZSH configuration file'
---

# .zshrc

```bash
export PATH=$HOME/bin:/usr/local/bin:$PATH
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"
plugins=(git)
source $ZSH/oh-my-zsh.sh
```
