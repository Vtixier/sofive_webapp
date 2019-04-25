Vue.component('sofive-left-menu', {
  template: `
		<nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <img alt="image" class="rounded-circle" style="max-width: 50px" src="https://t3.ftcdn.net/jpg/01/16/24/84/240_F_116248442_MurRgP9ZlF2HAoddH2D7i3Csl7xAPwEb.jpg" />
                        </div>
                        <div class="logo-element">
                            <img alt="image" class="rounded-circle" style="max-width: 50px" src="https://t3.ftcdn.net/jpg/01/16/24/84/240_F_116248442_MurRgP9ZlF2HAoddH2D7i3Csl7xAPwEb.jpg" />
                        </div>
                    </li>
                    <li>
                        <a href="standings.html"><i class="fa fa-trophy"></i><span class="nav-label">Schedule and standings</span></a>
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