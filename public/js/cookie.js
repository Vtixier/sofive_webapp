Vue.component('sofive-cookie', {
  template: `
  		<div>
  		<div class="modal inmodal fade" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Select center location</h4>
                        <small class="font-bold">Please select your prefered location</small>
                    </div>
                    <div class="modal-body">
                        <label class="col-form-label" for="status">
                            <div v-if="facility_loading">
                                <div>
                                    <div class="sk-spinner sk-spinner-wave">
                                        <div class="sk-rect1"></div>
                                        <div class="sk-rect2"></div>
                                        <div class="sk-rect3"></div>
                                        <div class="sk-rect4"></div>
                                        <div class="sk-rect5"></div>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <select class="select_season form-control" v-model="selected.center">
                            <option value="0">Pick a location</option>
                            <option v-for="center in centers" :value="center.id">{{center.name}}</option>
                        </select>
                    </div>

                    <div class="modal-footer">
                        <button type="button" v-on:click="save" class="btn btn-primary" data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
		<button id="auto-open" type="button" style="display: none" data-toggle="modal" data-target="#myModal5">
            Large Modal
        </button>
        </div>`,
  data() {
  	return {
  		open: false,
  		centers: [],
  		facility_loading: false,
  		selected: {
            center: "0",
        }
  	}
  },
  mounted: function() {
  	this.getCenters()
    const c = this.getCookie("center")
    if (!c) {
    	document.querySelector("#auto-open").click()
    }
  },
  methods: {
  	getCenters: function() {
        this.facility_loading = true
        this.centers = []
        this.$http.get("http://localhost:8080/facility/")
            .then((resp) => {
                this.centers = resp.body;
                this.facility_loading = false
            })
            .catch((err) => {
                console.log(err.body.errors)
            })
    },
    save: function() {
    	if (this.selected.center !== "0") {
    		this.setCookie("center", this.selected.center, 9999)
    	}
    },
  	setCookie: function(name,value,days) {
  		var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
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