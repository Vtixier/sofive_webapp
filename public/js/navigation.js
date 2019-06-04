Vue.component('sofive-left-menu', {
  template: `
		<nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                        <a href="index.html"> <img alt="image" class="image" style="max-width: 150px"
                                :src="img" /> </a>
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <br/><br/>
                            <span class="text-muted text-xs block" style="color: white !important">Change center <b class="caret"></b></span>
                            </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a class="dropdown-item" v-on:click="setCookie('1')">Sofive Meadowlands</a></li>
                                <li><a class="dropdown-item" v-on:click="setCookie('3')">Sofive Brooklyn</a></li>
                                <li><a class="dropdown-item" v-on:click="setCookie('4')">Sofive Rockville</a></li>
                                <li><a class="dropdown-item" v-on:click="setCookie('2')">Sofive Elkins-Park</a></li>
                                <li><a class="dropdown-item" v-on:click="setCookie('5')">Sofive Columbia</a></li>
                            </ul>
                            <ul>
                        </div>
                    </li>
                    <li>
                        <a href="standings.html"><i class="fa fa-trophy"></i><span class="nav-label">Schedule & standings</span></a>
                    </li>
                    <li>
                        <a href="search.html"><i class="fa fa-users"></i><span class="nav-label">Team</span></a>
                    </li>
                    <li>
                        <a href="video.html"><i class="fa fa-video-camera"></i><span class="nav-label">Videos</span></a>
                    </li>
                </ul>
            </div>
        </nav>`,
  data() {
    return {
        img: "img/sofive/sofive.png"
    }
  },
  mounted: function() {
    this.getCenterImage()
    document.getElementById('top-search').onkeypress = function(e) {
        var event = e || window.event;
        var charCode = event.which || event.keyCode;

        if ( charCode == '13' ) {
          window.location = "search.html?query="+e.target.value
          return false;
        }
    }
  },
  methods: {
    getCenterImage: function() {
        const c = this.getCookie("center"),
        self = this;
        if (!c) {
            setTimeout(self.getCenterImage, 5000) // wait for cookie to be set
        }
        let img = "img/sofive/sofive.png"
        switch (c) {
            case "1":
                img = "img/sofive/sofivemdl.png"
                break;
            case "2":
                img = "img/sofive/sofiveekp.png"
                break;
            case "3":
                img = "img/sofive/sofivebrk.png"
                break;
            case "4":
                img = "img/sofive/sofiverok.png"
                break;
            case "5":
                img = "img/sofive/sofiverok.png"
                break;
            default:
        }
        this.img = img
    },
    setCookie: function(value) {
        var date = new Date();
        date.setTime(date.getTime() + (9999*24*60*60*1000));
        let expires = "; expires=" + date.toUTCString();
        document.cookie = "center=" + (value || "")  + expires + "; path=/";
        this.getCenterImage()
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