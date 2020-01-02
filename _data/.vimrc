
" Obtained from:
" https://realpython.com/vim-and-python-a-match-made-in-heaven/"


set nocompatible              " required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
"
" alternatively, pass a path where Vundle should install plugins
" call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'
"
" add all your plugins here (note older versions of Vundle
" used Bundle instead of Plugin)

" Autocompletion "
Plugin 'davidhalter/jedi-vim'

" Enable folding with the spacebar
Plugin 'tmhedberg/SimpylFold'

" Auto-indentation
Plugin 'vim-scripts/indentpython.vim'
Plugin 'vim-syntastic/syntastic'
Plugin 'nvie/vim-flake8'
Plugin 'jnurmine/Zenburn'
Plugin 'altercation/vim-colors-solarized'

" File browsing + Git integration"
Plugin 'scrooloose/nerdtree'
Plugin 'Xuyuanp/nerdtree-git-plugin'

" Super searching "
Plugin 'kien/ctrlp.vim'

" Powerline "
Plugin 'Lokaltog/powerline', {'rtp': 'powerline/bindings/vim/'}




" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required


" Enable folding
set foldmethod=indent
set foldlevel=99


" Enable folding with the spacebar
nnoremap <space> za


syntax on
filetype indent plugin on

au BufNewFile,BufRead *.py, Snakefile
    \ set tabstop=4
    \ set softtabstop=4
    \ set shiftwidth=4
    \ set textwidth=79
    \ set expandtab
    \ set autoindent
    \ set fileformat=unix

au BufNewFile,BufRead *.js, *.html, *.css
    \ set tabstop=2
    \ set softtabstop=2
    \ set shiftwidth=2

" Flag unnecessary whitespace
au BufRead,BufNewFile *.py,*.pyw,*.c,*.h match BadWhitespace /\s\+$/


" VIM-jedi setting "
" let g:jedi#use_tabs_not_buffers = 1



set encoding=utf-8
let python_highlight_all=1
syntax on


au BufNewFile,BufRead Snakefile set syntax=snakemake
au BufNewFile,BufRead *.snake set syntax=snakemake

" Color Schemes "

if has('gui_running')
	set background=dark
	colorscheme solarized
else
	colorscheme zenburn
endif

" Lune numbering "
set nu

