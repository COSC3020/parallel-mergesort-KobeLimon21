# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The worst time complexity here is $\Theta$ (nlogn), the merging takes $\Theta$ (n) and the arrays are halved at each step which results in a recursion depth of logn. This is the same as the normal merge sort that we viewed in the slides. The span is $\Theta$(logn) as there are only log n merge steps in the recursion tree with each level done in parallel. 


Sources:

Chat GPT - helped to figure out why my test file was not running initially

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 

Slides -  initial mergesort implementation and parallism slides 

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
