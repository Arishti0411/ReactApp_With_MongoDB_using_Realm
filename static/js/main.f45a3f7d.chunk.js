(this.webpackJsonpstudent=this.webpackJsonpstudent||[]).push([[0],{419:function(t,e,s){},420:function(t,e,s){"use strict";s.r(e);var i=s(0),a=s.n(i),l=s(15),n=s.n(l),c=s(75),r=s.n(c),o=s(120),h=s(67),d=s(68),u=s(54),p=s(72),b=s(71),f=s(139),j=s.n(f),_=s(14),y=function(t){Object(p.a)(s,t);var e=Object(b.a)(s);function s(t){var i;return Object(h.a)(this,s),(i=e.call(this,t)).state={option:{search:!0,paging:!0,filtering:!0,exportButton:!0},columns:[{title:"College ID",field:"cid"},{title:"College Name",field:"name"},{title:"Year Founded",field:"year"},{title:"Location",field:"location"},{title:"Number of Students",field:"total"},{title:"Courses Offered",field:"course"}]},i}return Object(d.a)(s,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(j.a,{title:"College Details",data:this.props.list,columns:this.state.columns,options:this.state.option})})}}]),s}(i.Component),v=function(t){Object(p.a)(s,t);var e=Object(b.a)(s);function s(t){var i;return Object(h.a)(this,s),(i=e.call(this,t)).state=i.state={option:{search:!0,paging:!0,filtering:!0,exportButton:!0},columns:[{title:"Student ID",field:"sid"},{title:"Name",field:"name"},{title:"Year Joined",field:"year"},{title:"College ID",field:"cid"},{title:"Skills",field:"skills"}]},i}return Object(d.a)(s,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(j.a,{title:"Student Details",data:this.props.list,columns:this.state.columns,options:this.state.option})})}}]),s}(i.Component),O=s(203),m=(s(419),function(t){Object(p.a)(s,t);var e=Object(b.a)(s);function s(t){var i;return Object(h.a)(this,s),(i=e.call(this,t)).main=i.main.bind(Object(u.a)(i)),i}return Object(d.a)(s,[{key:"main",value:function(){this.props.state.setState({show_chart:!1})}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("center",{children:Object(_.jsx)("button",{onClick:this.main,children:"BACK"})}),this.props.state.state.show_drill_city||Object(_.jsx)(y,{list:this.props.state.state.drill_city_data},this.props.state),this.props.state.state.show_drill_skill||Object(_.jsx)(v,{list:this.props.state.state.drill_skill_data},this.props.state),this.props.state.state.show_drill_course||Object(_.jsx)(y,{list:this.props.state.state.drill_course_data},this.props.state)]})}}]),s}(i.Component)),k=s(196),g=s.n(k),w=s(202),x={fontSize:"0.4vw",fontFamily:"Helvetica"},S=["c","c++","java","python","webdev","appdev"],C=["btech","mtech","phd","bsc"],z=function(t){Object(p.a)(s,t);var e=Object(b.a)(s);function s(t){var i;return Object(h.a)(this,s),(i=e.call(this,t)).state={show_chart:!1,hide:!1,drill_city_data:[],show_drill_city:!0,show_drill_skill:!0,drill_skill_data:[],drill_course_data:[],show_drill_course:!0},i.drill_city=i.drill_city.bind(Object(u.a)(i)),i.drill_skill=i.drill_skill.bind(Object(u.a)(i)),i.main=i.main.bind(Object(u.a)(i)),i.drill_course=i.drill_course.bind(Object(u.a)(i)),i}return Object(d.a)(s,[{key:"drill_course",value:function(){var t=Object(o.a)(r.a.mark((function t(e){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({drill_course_data:[],hide:!0}),s=0;case 2:if(!(s<this.props.col.length)){t.next=10;break}return t.next=5,this.props.col[s].course.split(", ").indexOf(C[e]);case 5:-1!=t.sent&&this.setState({drill_course_data:this.state.drill_course_data.concat(this.props.col[s])});case 7:s++,t.next=2;break;case 10:this.setState({show_chart:!0,show_drill_city:!0,show_drill_skill:!0,hide:!1,show_drill_course:!1});case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"drill_city",value:function(){var t=Object(o.a)(r.a.mark((function t(e){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({drill_city_data:[],hide:!0}),s=0;case 2:if(!(s<this.props.col.length)){t.next=10;break}return t.next=5,this.props.col[s].location.split(", ")[0];case 5:t.sent=="City "+(e+1)&&this.setState({drill_city_data:this.state.drill_city_data.concat(this.props.col[s])});case 7:s++,t.next=2;break;case 10:this.setState({show_chart:!0,show_drill_city:!1,show_drill_skill:!0,hide:!1,show_drill_course:!0});case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"drill_skill",value:function(){var t=Object(o.a)(r.a.mark((function t(e){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({drill_skill_data:[],hide:!0}),s=0;case 2:if(!(s<this.props.std.length)){t.next=10;break}return t.next=5,this.props.std[s].skills.split(", ").indexOf(S[e]);case 5:-1!=t.sent&&this.setState({drill_skill_data:this.state.drill_skill_data.concat(this.props.std[s])});case 7:s++,t.next=2;break;case 10:this.setState({show_chart:!0,show_drill_city:!0,show_drill_skill:!1,hide:!1,show_drill_course:!0});case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"main",value:function(){this.setState({show_chart:!1,show_drill_city:!0,show_drill_skill:!0})}},{key:"render",value:function(){var t=this;return Object(_.jsxs)("div",{className:"App",children:[!this.state.hide||Object(_.jsxs)("div",{style:{position:"absolute",top:"30%",left:"45%"},children:["Loading ",Object(_.jsx)(g.a,{type:"spokes",color:"red",height:"120%",width:"120%"})]}),this.state.hide||Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("br",{}),!this.state.show_chart||Object(_.jsx)(m,{state:this}),this.state.show_chart||Object(_.jsxs)("div",{className:"grid-container",children:[Object(_.jsx)(w.PieChart,{className:"grid-item",label:function(t){return t.dataEntry.title},onClick:function(e,s){return t.drill_city(s)},animate:!0,lineWidth:70,labelStyle:Object(O.a)({},x),data:this.props.data},this.props.data),Object(_.jsx)(w.PieChart,{className:"grid-item",data:this.props.data2,label:function(t){return t.dataEntry.title},onClick:function(e,s){return t.drill_skill(s)},animate:!0,lineWidth:70,labelStyle:Object(O.a)({},x)},this.props.data2),Object(_.jsx)(w.PieChart,{className:"grid-item",data:this.props.data3,label:function(t){return t.dataEntry.title},onClick:function(e,s){return t.drill_course(s)},animate:!0,lineWidth:70,labelStyle:Object(O.a)({},x)},this.props.data3)]})]})]})}}]),s}(i.Component),N=s(451),I=s(450),A=["c","c++","java","python","webdev","appdev"],E=["btech","mtech","phd","bsc"],$=function(t){Object(p.a)(s,t);var e=Object(b.a)(s);function s(t){var i;return Object(h.a)(this,s),(i=e.call(this,t)).state={col:[],std:[],cl:!0,cc:!1,gf:!1,graph_city:[],graph_skills:[],graph_course:[],stylec:{backgroundColor:"#58b851",fontSize:"2vw"},style:{fontSize:"2vw"},stylep:{fontSize:"2vw"}},i.func=i.func.bind(Object(u.a)(i)),i.cole=i.cole.bind(Object(u.a)(i)),i.ste=i.ste.bind(Object(u.a)(i)),i.grf=i.grf.bind(Object(u.a)(i)),i.func(),i}return Object(d.a)(s,[{key:"func",value:function(){var t=Object(o.a)(r.a.mark((function t(){var e,s,i,a,l,n,c,o=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-flnbc/service/college/incoming_webhook/college");case 2:return e=t.sent,t.next=5,e.json();case 5:for(s=t.sent,i=0;i<s.length;i++)this.setState({col:this.state.col.concat({cid:s[i].cid.$numberInt,name:s[i].name,year:s[i].year.$numberInt,location:s[i].city+", "+s[i].state+", "+s[i].country,total:s[i].total.$numberInt,course:s[i].course.join(", ")})});return t.next=9,fetch("https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/student-flnbc/service/student/incoming_webhook/webhook0");case 9:return a=t.sent,t.next=12,a.json();case 12:for(l=t.sent,i=0;i<l.length;i++)this.setState({std:this.state.std.concat({sid:l[i].id.$numberInt,name:l[i].name,year:l[i].year.$numberInt,cid:l[i].cid.$numberInt,skills:l[i].skills.join(", ")})});for(i=1;i<=10;i++)this.setState({graph_city:this.state.graph_city.concat({title:"City "+i,value:this.state.col.filter((function(t){return t.location.split(", ")[0]==="City "+i})).length,color:"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)})});n=this.state.std.map((function(t){return t.skills})).join("|"),A.forEach((function(t){o.setState({graph_skills:o.state.graph_skills.concat({title:t,value:n.split(t).length-1,color:"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)})})})),c=this.state.col.map((function(t){return t.course})).join("|"),E.forEach((function(t){o.setState({graph_course:o.state.graph_course.concat({title:t,value:c.split(t).length-1,color:"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)})})})),this.setState({cl:!1});case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"cole",value:function(){this.setState({cc:!1,gf:!1,stylec:{backgroundColor:"#58b851",fontSize:"2vw"},stylep:{fontSize:"2vw"},style:{fontSize:"2vw"}})}},{key:"ste",value:function(){this.setState({cc:!0,gf:!1,stylec:{fontSize:"2vw"},stylep:{backgroundColor:"#58b851",fontSize:"2vw"},style:{fontSize:"2vw"}})}},{key:"grf",value:function(){this.setState({gf:!0,stylec:{fontSize:"2vw"},stylep:{fontSize:"2vw"},style:{backgroundColor:"#58b851",fontSize:"2vw"}})}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"App",children:[this.state.cl||Object(_.jsx)(N.a,{style:{backgroundColor:"#9cd598",color:"#10230e"},centered:!0,children:Object(_.jsxs)("center",{children:[Object(_.jsx)(I.a,{label:"Colleges",onClick:this.cole,style:this.state.stylec}),Object(_.jsx)(I.a,{label:"Students",onClick:this.ste,style:this.state.stylep}),Object(_.jsx)(I.a,{label:"Visualisations",onClick:this.grf,style:this.state.style})]})}),!this.state.cl||Object(_.jsxs)("div",{style:{position:"absolute",top:"30%",left:"45%"},children:["Loading ",Object(_.jsx)(g.a,{type:"spokes",color:"red",height:"120%",width:"120%"})]}),this.state.cl||this.state.cc||this.state.gf||Object(_.jsx)(y,{list:this.state.col},this.state),this.state.cl||!this.state.cc||this.state.gf||Object(_.jsx)(v,{list:this.state.std},this.state),this.state.cl||!this.state.gf||Object(_.jsx)(z,{col:this.state.col,std:this.state.std,data:this.state.graph_city,data2:this.state.graph_skills,data3:this.state.graph_course})]})}}]),s}(i.Component);n.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)($,{})}),document.getElementById("root"))}},[[420,1,3]]]);
//# sourceMappingURL=main.f45a3f7d.chunk.js.map