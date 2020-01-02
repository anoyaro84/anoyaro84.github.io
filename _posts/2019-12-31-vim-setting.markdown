---
layout: post
title: Vim environment creation
date: 2019-12-31 15:09:00
description: an example of a blog post with some code
comments: true
---


Here, I would like to keep how I constructed my vim environment.
In particular, I need the following features for my python development.


#### My need (in the ideal world)
<ul>
    <li> Syntax support (e.g., highlighting). </li>
    <li> Autocompletion - for files and variables. </li>
    <li> Navigate to other files.</li>
    <li> Compatible with multiple environment, mostly maintained by conda.</li>
    <li> Good support of snakmake.</li>
    <li> Interactive python/R session to test the script.</li>
</ul>


<hr>

<h3> 1. Vim installation </h3>

I first updated vim to version 8.2, installing from the source (from the <a href="https://github.com/vim/vim">official github repo</a>.
Python should be used to compile vim, using the following options for configuration:

{% highlight shell %}
./configure --with-features=huge \
            --enable-multibyte \
            --enable-rubyinterp=yes \
            --enable-python3interp=yes \
            --with-python3-config-dir=$(python3-config --configdir) \
            --enable-perlinterp=yes \
            --enable-luainterp=yes \
            --enable-gui=gtk2 \
            --enable-cscope
{% endhighlight %}
Check <a href="https://github.com/ycm-core/YouCompleteMe/wiki/Building-Vim-from-source">this thread</a> for dependancy of the installation.


<h3> 2. Plugin installation with Vundle </h3>

Then, plugins are installed using Vundle, mostly conscerns editing `.vimrc`. 
To install a plugin with Vundle:

{% highlight shell %}
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'NAME_OF_THE_PLUGIN'

call vundle#end()            " required
{% endhighlight %}
Note that for plugins from a github repository can be referred like: `ncm2/ncm2`.
For the actual installation, execute `:PluginInstall` once after starting vim.


Key plugins are:

<ul>
  <li><a href="https://github.com/davidhalter/jedi-vim">jedi-vim</a> - python auto-completion support</li>
  <li><a href="https://github.com/preservim/nerdtree">NERDTree</a> - for browing files in vim</li>
  <li><a href="https://github.com/jalvesaq/Nvim-R">Nvim-R</a> - for R integration </li>
  <li><a href="https://github.com/gaalcaras/ncm-R">ncm-R</a> - for asynchronous autocompletion when editing R scripts </li>
</ul>


<h3> 3. Supporting python sytax support for Snakefile </h3>

I obtained the <a href="https://bitbucket.org/jayhesselberth/snakemake/src/master/misc/vim/syntax/snakemake.vim">syntax definition of snakemake</a> for vim by Jay Hesselberth (@ University of Colorado), and then merely added the following line to execute `jedi-vim`, which is only executed for python files.

{% highlight shell %}
runtime! ftplugin/python/jedi.vim after/ftplugin/python/jedi.vim
{% endhighlight %}



<h3> 4. Support to multiple environments by conda </h3>

By activating environments using conda (by `conda activate`), you can switch R or python version used in vim support.
For instance, you will see autocompletion for a python package if the active envrionment have the package installed.
Vice versa, if you activate an enviornment that lacks the package, then you will see no autocompletion for this package.
Also, if there is an specific version of R installed within an environment, then the very version of R will be used in Nvim-R upon activation of the environment.

There is a catch though. Some plugin may not function properly, if you have different version of python available in the environment.
Especially, some plugins particularly depends on `python 3`, so they may not work when `python 2` is used.

Also, you need to install `pynvim` and `neovim` (from `conda-forge` channel) in each environment, using: `conda install -c conda-forge neovim pynvim`.



<h3> The final outcome files: </h3>

<ul>
    <li> <a href="/assets/scripts/vimrc">.vimrc</a> (to be located at ~/)
    <li> <a href="/assets/scripts/snakemake.vim">snakmake.vim</a> (to be located at ~/.vim/syntax/)
</ul>



<hr>

Further reference:

<ul>
  <li> I took the useful vim plugins for Python editing from the following <a href="https://realpython.com/vim-and-python-a-match-made-in-heaven/"> instruction</a>.</li>
</ul>

