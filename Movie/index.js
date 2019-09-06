var click = document.getElementById('searchData');
        click.addEventListener('click' , function () {
            var getUser = document.getElementById('movieInput').value;
            
            $.ajax({
            url: 'http://www.omdbapi.com/?t=' + getUser + '&apikey=f15d1a62',
        })
        .done(function (data) {
            /*console.log(data)*/
            var img = document.createElement('img');
            var imgParent = document.querySelector('#main');
            img.setAttribute('src' , data.Poster);
            img.style.width = '200px'
            imgParent.appendChild(img);

            var title = document.createElement('h1');
            var titleParent  = document.querySelector('#details');
            title.innerHTML = 'Title : ' + data.Title;
            titleParent.appendChild(title);
            title.setAttribute('class' , 'text-info');

            var year = document.createElement('h3');
            var yearParent  = document.querySelector('#details');
            year.innerHTML = "Year :" + data.Year;
            yearParent.appendChild(year);
            year.setAttribute('class' , 'text-info');

            var released = document.createElement('h3');
            var releasedParent  = document.querySelector('#details');
            released.innerHTML = 'Released : ' + data.Released;
            releasedParent.appendChild(released);
            released.setAttribute('class' , 'text-info');

            var imdb = document.createElement('h3');
            var imdbParent  = document.querySelector('#details');
            imdb.innerHTML = 'Rating : ' + data.imdbRating;
            imdbParent.appendChild(imdb);
            imdb.setAttribute('class' , 'text-info');

            

            
        })
        })

        $('#movieInput').focus(function () {
            $(this).css('border' , '2px solid green')
            $("img").remove();
            $('h1').remove();
            $('h3').remove();
        })