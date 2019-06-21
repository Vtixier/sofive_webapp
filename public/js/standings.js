Vue.component('sofive-standings', {
  template: `
		<div class="ibox ">
            <div class="ibox-title">
                <h5>Standings</h5>
                <div class="ibox-tools">
                    <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                </div>
            </div>
            <div :class="{'ibox-content': true, 'sk-loading': loading}">
            	<div class="sk-spinner sk-spinner-wave">
                    <div class="sk-rect1"></div>
                    <div class="sk-rect2"></div>
                    <div class="sk-rect3"></div>
                    <div class="sk-rect4"></div>
                    <div class="sk-rect5"></div>
                </div>
                <div>
                    <table class="table table-hover margin bottom">
                        <thead>
                            <tr>
                                <th style="width: 1%" class="text-center">No.</th>
                                <th>Team</th>
                                <th class="text-center">Games</th>
                                <th class="text-center">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(standing, index) in standings" style="cursor: pointer;" v-on:click="gotoTeam(standing.id)">
                                <td class="text-center">{{index+1}}</td>
                                <td>
                                    <span class="text-navy" v-if="standing.Team == team">{{standing.Team}}</span>
                                    <span class="text-navy" v-if="standing.Team == opponent">{{standing.Team}}</span>
                                    <span v-if="(standing.Team !== team) && (standing.Team !== opponent)">{{standing.Team}}</span>
                                </td>
                                <td class="text-center">{{standing.Games}}</td>
                                <td class="text-center"><span>{{standing.Points}}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`,
  props: ['standings', 'team', 'opponent', 'loading'],
  methods: {
    gotoTeam: function(id) {
        window.location = "team.html?id=" + id
    }
  }
});