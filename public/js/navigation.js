Vue.mixin({
  data: function() {
    return {
      backend: 'http://localhost:8080'
    }
  }
})

Vue.component('sofive-left-menu', {
  template: "<div><nav class=\"navbar-default navbar-static-side\" role=\"navigation\"><div class=\"sidebar-collapse\"><ul class=\"nav metismenu\" id=\"side-menu\"><li class=\"nav-header\"><div class=\"dropdown profile-element\"><a href=\"/index.html\"> <img alt=\"image\" class=\"image\" style=\"max-width: 150px\" :src=\"img\" /> </a><a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"/#\"><br/><br/><span class=\"text-muted text-xs block\" style=\"color: white !important\">Change center <b class=\"caret\"></b></span></a><ul class=\"dropdown-menu animated fadeInRight m-t-xs\"><li><span class=\"dropdown-item\" v-on:click=\"setCookie('1')\">Sofive Meadowlands</span></li><li><a class=\"dropdown-item\" v-on:click=\"setCookie('3')\">Sofive Brooklyn</a></li><li><a class=\"dropdown-item\" v-on:click=\"setCookie('4')\">Sofive Rockville</a></li><li><a class=\"dropdown-item\" v-on:click=\"setCookie('2')\">Sofive Elkins Park</a></li><li><a class=\"dropdown-item\" v-on:click=\"setCookie('5')\">Sofive Columbia</a></li></ul><br/></div></li><li style=\"border-left: 4px solid #19aa8d\"><a href=\"/search.html\"><i class=\"fa fa-users\"></i><span class=\"nav-label\">My team</span></a></li><li><a href=\"/registration/products.html\"><i class=\"fa fa-plus-square-o\"></i><span class=\"nav-label\">Register</span></a></li><li><a href=\"/book.html\"><i class=\"fa fa-calendar\"></i><span class=\"nav-label\">Book a field</span></a></li><li><a href=\"/videos.html\"><i class=\"fa fa-video-camera\"></i><span class=\"nav-label\">Videos</span></a></li><li><a href=\"/standings/products.html\"><i class=\"fa\">&#xf017;</i><span class=\"nav-label\">Schedule & standings</span></a></li><li><a href=\"/gotm.html\"><i class=\"fa fa-trophy\"></i><span class=\"nav-label\">Goal of the month</span><span class=\"label label-info float-right\" style=\"color: white\">NEW</span></a></li><li><a href=\"/fb.html\"><i class=\"fa\">&#xf09a;</i><span class=\"nav-label\">Chatbot</span></a></li><li><a href=\"https://sofive.com\" target=\"blank\"><i class=\"fa fa-home\"></i><span class=\"nav-label\">Go to <b>sofive.com</b></span></a></li></ul></div></nav><div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"exampleModal\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"  style=\"text-align: center; background-color: #f2cfcf; color: #992929\"><div class=\"alert alert-error\" role=\"alert\"><h3 class=\"alert-heading\"><b>IMPORTANT UPDATE: Temporary Closing</b></h3><p>Based on the ongoing spread of COVID-19, and on the advice of public officials to support social-distancing efforts, Sofive is temporarily closing its facilities located in Brooklyn (NY), Carlstadt (NJ), Elkins Park (PA), Columbia (MD), and Rockville (MD) effective 01:00 AM Sunday, March 15, 2020.</p><hr><p class=\"mb-0\">For updates regarding the closure, please <a href=\"https://sofive.com/update\" style=\"color: #992929\"><u>click here</u></a>.<br/>We sincerely regret the inconvenience. Thank you for your patience and cooperation</p></div></div></div></div><div class=\"modal inmodal fade\" id=\"myModal5\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog modal-lg\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 class=\"modal-title\">Select center location</h4><small class=\"font-bold\">Please select your prefered location</small></div><div class=\"modal-body\"><label class=\"col-form-label\" for=\"status\"><div v-if=\"facility_loading\"><div><div class=\"sk-spinner sk-spinner-wave\"><div class=\"sk-rect1\"></div><div class=\"sk-rect2\"></div><div class=\"sk-rect3\"></div><div class=\"sk-rect4\"></div><div class=\"sk-rect5\"></div></div></div></div></label><div class=\"vote-item text-center\" v-for=\"center in centers\"><div class=\"row\" v-on:click=\"setCookie(center.id)\"><div class=\"col-md-12\"><span class=\"vote-title\" style=\"margin-left: 0; color: rgb(3, 121, 62);\">{{center.name}}</span></div></div></div></div></div></div></div><button id=\"auto-open\" type=\"button\" style=\"display: none\" data-toggle=\"modal\" data-target=\"#myModal5\">Large Modal</button><button id=\"open-covid\" type=\"button\" style=\"display: none\" data-toggle=\"modal\" data-target=\"#exampleModal\">Large Modal</button></div>",
  data: function() {
    return {
        img: "/img/sofive/sofive.png",
        open: false,
        centers: [],
        facility_loading: false,
        origin_url: null
    }
  },
  mounted: function() {
    this.origin_url = window.location.href
    console.log("Origin url", this.origin_url)
    document.querySelector("#open-covid").click()
    const params = this.findGetParameter()
    if (params.center) {
        const url = window.location.href.replace("center=", "")
        return this.setCookie(params.center, url)
    }
    this.getCenters()
    const c = this.getCookie("center")
    if (!c) {
        document.querySelector("#auto-open").click()
    }
    this.getCenterImage()
  },
  methods: {
    findGetParameter: function() {
        var queryDict = {}
        decodeURI(location.search).substr(1).split("&").forEach(function(item) {
            queryDict[item.split("=")[0]] = item.split("=")[1]
        })
        return queryDict
    },
    getCenterImage: function() {
        const c = this.getCookie("center"),
        self = this;
        console.log("Get center image", c)
        if (!c) {
            return setTimeout(self.getCenterImage, 5000) // wait for cookie to be set
        }
        let img = "/img/sofive/sofive.png"
        switch (c) {
            case "1":
                img = "/img/sofive/sofivemdl.png"
                break;
            case "2":
                img = "/img/sofive/sofiveekp.png"
                break;
            case "3":
                img = "/img/sofive/sofivebrk.png"
                break;
            case "4":
                img = "/img/sofive/sofiverok.png"
                break;
            case "5":
                img = "/img/sofive/sofivecol.png"
                break;
            default:
        }
        this.img = img
    },
    getCenters: function() {
        this.facility_loading = true
        this.centers = []
        this.$http.get(this.backend+"/facility/")
            .then(function(resp) {
                this.centers = resp.body;
                this.facility_loading = false 
            })
            .catch(function(err) {
                console.log(err.body.errors)
            })
    },
    setCookie: function(value, url) {
        var date = new Date();
        date.setTime(date.getTime() + (9999*24*60*60*1000));
        let expires = "; expires=" + date.toUTCString();
        document.cookie = "center=" + (value || "")  + expires + "; path=/";
        window.location = this.origin_url
    },
    getCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
  }
});