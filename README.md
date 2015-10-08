# Socialite - Elegant social media plugins for Bootstrap
## INFANT project! Less than 1 week old, come contribute!
###[Demo]
##### The easiest way to learn these components. ALL icons are simply wrapped in a column, with a container element
 aptly named after the social media you are writing markup for (e.g., class="facebook" for the facebook icon        container), and then there is an inner element (with the exception of facebook, [social media]-inner is the rule).

##Icons

###Simple usage example:
```
<div class="container">
    <div class="row smr">
        <div class="col-md-12 icon-col">
           
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

###Basic styles and corresponding classes


####Circle
`<div class="facebook circle">`
`  <div class="fb-ic"></div>`
`</div>`
####Transparent
```
<div class="facebook transparent">
  <div class="fb-ic"></div>
</div>
```
####Vertical (sidebar maybe?)
```
<div class="row smr">
  <div class="col-md-12 vertical">
    <div class="facebook">
      <div class="fb-ic"></div>
    </div>
  </div>
</div>
```

### Animations (under heavy development)

####Roll right
```
<div class="facebook roll-right">
  <div class="fb-ic"></div>
</div>
```

```
<div class="facebook bounce">
  <div class="fb-ic"></div>
</div>
```


See index.html for more examples.


TODO: Write Documentation... :))


[demo]:http://h3xc0ntr0l.github.io/Socialite
