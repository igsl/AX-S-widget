XCRI-CAP Demonstrator project
=============================

Advanced XCRI-CAP Search widget (AX-S widget)
---------------------------------------------

This project contains the example code and components for the XCRI-CAP AX-S widget. The AX-S widget uses [the XXP](http://www.xxp.org "XXP") thesaurus based search engine to provide advanced subject searching for courses. The widget code can be embedded on any university or college website to provide 'best of breed' subject searching 'straight out of the box'.

AX-S uses any standard XCRI-CAP 1.2 feed to load details of the institution's courses for searching, displaying results and linking to the institution's own website. The use of the XCRI-CAP standard enables the search data source to be kept synchronised with the live courses information on the institution's website.

You can try out the AX-S search on the [Demonstrator web page](http://igsl.co.uk/xxp/ax-s/ou.html "AX-S Demostrator web page"). Start by typing your topic into the 'Search for:' box and select one of the search terms that presents itself. If you pause whilst typing the system will automatically match your text with its search terms. You can also optionally select an Education Level from the drop-down list. When you hit the 'Search' button, the widget sends your choices off to [the XXP](http://www.xxp.org "XXP") server which carries out the search. It returns a list of courses matched conceptually to your choice of search term. As well as courses that match exactly with the topic you’ve chosen, the results will include courses in topics that are broader or narrower than your topic, sorted by their relevance to your choice.

For example, using the term "software engineering" will give you results not only in 'Software Engineering' itself at the top of the list, but also lower down the list courses in more general 'Computing', then in development using specific techniques, such as object-oriented approaches and Java. These results are all widening out from Software Engineering, or narrowing in to topics within the field.

For more information on how to use the AX-S widget see the [project wiki](https://github.com/igsl/AX-S-widget/wiki "AX-S widget project wiki") or for background on the project see the [project blog](http://alanepaull.wordpress.com/category/xcri/demonstrators/ax-s-widget/ "AX-S widget project blog").
