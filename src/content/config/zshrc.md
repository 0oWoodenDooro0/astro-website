---
title: 'Zsh Configuration'
description: 'My main shell configuration with Oh My Zsh and custom aliases.'
tech: 'Zsh'
github_path: 'dotfiles/.zshrc'
path_linux: '~/.zshrc'
path_mac: '~/.zshrc'
path_windows: '%USERPROFILE%\.zshrc'
---

# .zshrc

```bash
export PATH=$HOME/bin:/usr/local/bin:$PATH
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"
plugins=(git)
source $ZSH/oh-my-zsh.sh
```