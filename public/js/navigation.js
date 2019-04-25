Vue.component('sofive-left-menu', {
  template: `
		<nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <img alt="image" class="image" style="max-width: 150px"
                                src="img/sofive-blue.png" />
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <br/><br/>
                            <span class="text-muted text-xs block" style="color: white !important">Change center <b class="caret"></b></span>
                            </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a class="dropdown-item" href="profile.html">Sofive Brooklyn</a></li>
                                <li><a class="dropdown-item" href="contacts.html">Sofive Rockville</a></li>
                                <li><a class="dropdown-item" href="mailbox.html">Sofive Elkins-Park</a></li>
                                <li><a class="dropdown-item" href="mailbox.html">Sofive Columbia</a></li>
                            </ul>
                        </div>
                        <div class="logo-element">
                            <img alt="image" class="rounded-circle" style="max-width: 50px" src="https://t3.ftcdn.net/jpg/01/16/24/84/240_F_116248442_MurRgP9ZlF2HAoddH2D7i3Csl7xAPwEb.jpg" />
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
  props: [],
});