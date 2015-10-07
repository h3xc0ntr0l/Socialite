# Simple Social Media Icons
## Current under heavy development. See "v2" branch. v2 will become "Socialite" repository.


### Note that due to the repositories infancy (it is currently, at time of writing, less than 3 days old), there are __no__   browser prefixes. I am testing in Chrome (various releases, various laptops, all Ubuntu). Please, report ALL bugs!


##### The easiest way to learn these components. ALL icons are simply wrapped in a column, with a container element
 aptly named after the social media you are writing markup for (e.g., class="facebook" for the facebook icon        container), and then there is an inner element (with the exception of facebook, [social media]-inner is the rule).


Simple usage example:
```
<div class="container">
    <div class="row">
        <div class="col-md-12">
           
           <!-- facebook icon-->
           <div class="facebook">
               <div class="fb-ic"></div>
           </div>
           
           
           <!--github icon -->
           <div class="github">
               <div class="github-inner"></div>
           </div>
           
           
           <!-- twitter icon -->
           <div class="twitter">
                <div class="twitter-inner"></div>
           </div>
           
           
           <!-- codepen icon -->
           <div class="codepen">
                <div class="codepen-inner"></div>
           </div>
        </div>
    </div>
</div>
````
And that's it!

###Another couple things...

###Transparent backgrounds

```
<div class="facebook transparent">
    <div class="fb-ic"></div>
</div>
```

###Circular Icons
```
<div class="facebook circle">
    <div class="fb-ic"></div>
</div>
```

###Various Animations are supported. Currently, changes are being made to refactor the bounce and a few other #####things into classes, but the base `roll-right` animation works.  Use as so:
```
<div class="facebook circle roll-right">
    <div class="fb-ic"></div>
</div>
```
See index.html for more examples.


TODO: Write Documentation... :))


