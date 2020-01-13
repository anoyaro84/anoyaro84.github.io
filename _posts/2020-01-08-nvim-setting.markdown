---
layout: post
title: Switching to neovim
date: 2020-01-09 15:09:00
description: another effort to set up environment - neovim
comments: true
---


I recently set up `vim`, and was very happy about this.
However, I also learned some features lacking. Specifically,

<ul>
   <li> Autocompletion does not work swiftly (need to type `Ctrl+Space`). </li>
   <li> Some features of `Nvim-R` is not functioning in vim. </li>
</ul>

The primary reference for setting up neovim is <a href="https://yufanlu.net/2018/09/03/neovim-python/">a blog posting of Yufan Lu</a>.
I also adapted previous `.vimrc` for the `Nvim-R` configuration.


<hr>

<h3> How does it look? </h3>

<h4> Working with python: </h4>
<img src="{{site.baseurl}}/assets/img/render1578870821062.gif">

<h4> Working with R: </h4>
<img src="{{site.baseurl}}/assets/img/render1578871944214.gif">



<h3> 1. Neovim installation </h3>

Neovim is installed using the following command:

{% highlight shell %}
sudo apt-get install neovim
{% endhighlight %}

On my Mint, it comes with python3 component by default.
It can be checked with (in `nvim`):

{% highlight shell %}
:echo has('python3')
{% endhighlight %}

which should return `1` when python3 is supported.


<h3> 2. Installing plugins </h3>

I used `vim-plug` to install plugins. (see <a href="https://github.com/junegunn/vim-plug">official repo</a>)
The installation of `vim-plug` can be done by:

{% highlight shell %}
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
{% endhighlight %}


Then, the plugin is installed by configuring `~/.config/nvim/init.vim`.
The part of `init.vim` specifying the list of plugins is below:

{% highlight Config File %}
" Obtained from:
" https://realpython.com/vim-and-python-a-match-made-in-heaven/"


set nocompatible              " required
filetype off                  " required

" set the runtime path to include Vundle and initialize
" set rtp+=~/.vim/bundle/Vundle.vim
call plug#begin()
" call vundle#begin()


" UI related
Plug 'chriskempson/base16-vim'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" Better Visual Guide
Plug 'Yggdroot/indentLine'

" syntax check
Plug 'w0rp/ale'
  
" Autocomplete
Plug 'ncm2/ncm2'
Plug 'roxma/nvim-yarp'
Plug 'ncm2/ncm2-bufword'
Plug 'ncm2/ncm2-path'
Plug 'ncm2/ncm2-jedi'
  
" Formater
Plug 'Chiel92/vim-autoformat'

" Enable folding with the spacebar
Plug 'tmhedberg/SimpylFold'

" File browsing + Git integration"
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'

" Super searching "
Plug 'kien/ctrlp.vim'


" R plugin "
Plug 'jalvesaq/Nvim-R'

Plug 'ncm2/ncm2'
Plug 'roxma/nvim-yarp'
Plug 'gaalcaras/ncm-R'

if !has('nvim')
    Plug 'roxma/vim-hug-neovim-rpc'
endif

Plug 'ncm2/ncm2-bufword'
Plug 'ncm2/ncm2-path'

" Optional: for snippet support
" Further configuration might be required, read below
Plug 'sirver/UltiSnips'
" Plug 'ncm2/ncm2-ultisnips'

" Optional: better Rnoweb support (LaTeX completion)
Plug 'lervag/vimtex'



" All of your Plugins must be added before the following line
" call vundle#end()            " required
call plug#end()

{% endhighlight %}

Then, the installation can be done by `:PlugInstall` after starting `nvim`. (needed only once
<h3> 3. Other configurations </h3>

There are other settings many of which concerns behavior of plugins.
It is mostly copied from <a href="https://yufanlu.net/2018/09/03/neovim-python/">the blog posting of Yufan Lu</a>.

{% highlight Config File %}

""""""""""""" Airline""""""""""""""""""
let g:airline#extensions#tabline#enabled = 1


"""""""""""" Setting for NERDTree"""""""""""""""""""

let mapleader = "z"
nmap <leader>z :NERDTreeToggle<cr>

" Optional to show special NERDTree browser characters properly (e.g. on remote linux system) 
let g:NERDTreeDirArrows=0


" Lune numbering "
set nu


""""""""""" for R setting""""""""""""""""""""""""""
let R_esc_term = 1

" Emulate Tmux ^az
function ZoomWindow()
  let cpos = getpos(".")
  tabnew %
  redraw
  call cursor(cpos[1], cpos[2])
  normal! zz
endfunction
    
nmap gz :call ZoomWindow()<CR>


""""""" Copy from https://yufanlu.net/2018/09/03/neovim-python/"""""""

" Configurations Part
" UI configuration
syntax on
syntax enable
" colorscheme
let base16colorspace=256
colorscheme base16-gruvbox-dark-hard
set background=dark
" True Color Support if it's avaiable in terminal
if has("termguicolors")
    set termguicolors
endif
if has("gui_running")
  set guicursor=n-v-c-sm:block,i-ci-ve:block,r-cr-o:blocks
endif
set number
set relativenumber
set hidden
set mouse=a
set noshowmode
set noshowmatch
set nolazyredraw
" Turn off backup
set nobackup
set noswapfile
set nowritebackup
" Search configuration
set ignorecase                    " ignore case when searching
set smartcase                     " turn on smartcase
" Tab and Indent configuration
set expandtab
set tabstop=4
set shiftwidth=4
" vim-autoformat
noremap <F3> :Autoformat<CR>
" NCM2
augroup NCM2
  autocmd!
  " enable ncm2 for all buffers
  autocmd BufEnter * call ncm2#enable_for_buffer()
  " :help Ncm2PopupOpen for more information
  set completeopt=noinsert,menuone,noselect
  " When the <Enter> key is pressed while the popup menu is visible, it only
  " hides the menu. Use this mapping to close the menu and also start a new line.
  inoremap <expr> <CR> (pumvisible() ? "\<c-y>\<cr>" : "\<CR>")
  " uncomment this block if you use vimtex for LaTex
  " autocmd Filetype tex call ncm2#register_source({
  "           \ 'name': 'vimtex',
  "           \ 'priority': 8,
  "           \ 'scope': ['tex'],
  "           \ 'mark': 'tex',
  "           \ 'word_pattern': '\w+',
  "           \ 'complete_pattern': g:vimtex#re#ncm2,
  "           \ 'on_complete': ['ncm2#on_complete#omni', 'vimtex#complete#omnifunc'],
  "           \ })
augroup END
" Ale
let g:ale_lint_on_enter = 0
let g:ale_lint_on_text_changed = 'never'
let g:ale_echo_msg_error_str = 'E'
let g:ale_echo_msg_warning_str = 'W'
let g:ale_echo_msg_format = '[%linter%] %s [%severity%]'
let g:ale_linters = {'python': ['flake8']}
" Airline
let g:airline_left_sep  = ''
let g:airline_right_sep = ''
let g:airline#extensions#ale#enabled = 1
let airline#extensions#ale#error_symbol = 'E:'
let airline#extensions#ale#warning_symbol = 'W:'

{% endhighlight %}

<h3> 4. Compatibility with multiple conda environments </h3>

For autocompletion, vim needs an active R/Python3 session.
By default, the available R/python3 in the active environment is used.

In case of python,the following packages are required:
<ul>
   <li> `jedi` package for cod completion. </li>
   <li> `flake8` for code linting. </li>
   <li> `autopep8` for code formatting. </li>
</ul>

So these package are required in each conda environment (install using `pip`).

For R, so far I am not aware of any necessary package.


