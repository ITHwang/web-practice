var Links = {
    setColor: function(color){
        var links = document.querySelectorAll('li a');
        var i = 0;
        while (i < links.length){
            links[i].style.color = color;
            i = i + 1;
        }
    }
};

var Body = {
    setColor: function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Item = {
    setColor: function(color){
        var list = document.getElementsByClassName('txt');
        for (i of list)
            i.style.color = color;
    }
}

function nightDayHandler(self){
    if (self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('white');
        Item.setColor('black'); //fix font-color in txt in faculty.html
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('black');
    }
};