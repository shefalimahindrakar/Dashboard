
if(localStorage.getItem("warehouse")!=undefined){
    warehouse = JSON.parse(localStorage.getItem("warehouse"));
    console.log(warehouse)
}
else{
warehouse = [
  {
    "name" : "Warehouse-165",
    "code" : "W-00001",
    "id" : 1,
    "city": "Delhi",
    "space_available": 1234,
    "type" : "Leasable Space",
    "cluster" : "cluster-a-32",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-276",
    "code" : "W-00002",
    "id" : 2,
    "city": "Chennai",
    "space_available": 124,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-1",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-3039",
    "code" : "W-00003",
    "id" : 3,
    "city": "Indore",
    "space_available": 134,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-1",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-324",
    "code" : "W-00004",
    "id" : 4,
    "city": "Chennai",
    "space_available": 12,
    "type" : "Leasable Space",
    "cluster" : "cluster-a-21",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-5454",
    "code" : "W-00005",
    "id" : 5,
    "city": "Chennai",
    "space_available": 1243434,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-21",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-4345",
    "code" : "W-00006",
    "id" : 6,
    "city": "Chennai",
    "space_available": 1,
    "type" : "Leasable Space",
    "cluster" : "cluster-a-21",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-3455",
    "code" : "W-00007",
    "id" : 7,
    "city": "Mumbai",
    "space_available": 4,
    "type" : "Leasable Space",
    "cluster" : "cluster-a-2",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-23455",
    "code" : "W-00008",
    "id" : 8,
    "city": "Bangalore",
    "space_available": 3456,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-21",
    "is_registered" : true,
    "is_live" : true
  },
  {
    "name" : "Warehouse-6457",
    "code" : "W-00009",
    "id" : 9,
    "city": "Bangalore",
    "space_available": 1234545,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-1",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-32456",
    "code" : "W-000010",
    "id" : 10,
    "city": "Guwahati",
    "space_available": 121234,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-1",
    "is_registered" : true,
    "is_live" : true
  },
  {
    "name" : "Warehouse-3245678",
    "code" : "W-000011",
    "id" : 11,
    "city": "Delhi",
    "space_available": 98,
    "type" : "Leasable Space",
    "cluster" : "cluster-v-2",
    "is_registered" : true,
    "is_live" : false
  },
  {
    "name" : "Warehouse-4567",
    "code" : "W-000012",
    "id" : 12,
    "city": "Indore",
    "space_available": 97,
    "type" : "Warehouse Service",
    "cluster" : "cluster-a-1",
    "is_registered" : true,
    "is_live" : true
  },
  {
    "name" : "Warehouse-458",
    "code" : "W-000013",
    "id" : 13,
    "city": "Delhi",
    "space_available": 654,
    "type" : "Leasable Space",
    "cluster" : "cluster-a-1",
    "is_registered" : true,
    "is_live" : false
  }
]

}

function appendHTML(data){
    var name = data["name"]
    var code = data["code"]
    var id = data["id"]
    var city = data["city"]
    var space = data["space_available"]
    var type = data["type"]
    var cluster = data["cluster"]
    var registered = data["is_registered"]
    var live = data["is_live"]

    var htmlstring = "<tr id="+id+" onclick='openPage(id)'><td>"+id+"</td><td>"+name+"</td><td>"+code+"</td><td>"+city+"</td><td>"+space+"</td><td>"+type+"</td><td>"+cluster+"</td><td>"+registered+"</td><td>"+live+"</td></tr>"
    $("tbody").append(htmlstring); 
}

function createTable(){
for(var i=0; i<warehouse.length; i++){
    //Extract individual dictionary
    var data = warehouse[i];
    appendHTML(data);
}
}

function filterByCity(){
    var city = $('#city-text').val();
    console.log(city);
    $("tbody").empty();
    for(var i=0; i<warehouse.length; i++){
        var data = warehouse[i];
        if(city===data["city"]){
            appendHTML(data);
        }
    }
}

function filterByCluster(){
    var cluster = $('#cluster-text').val();
    console.log(cluster);
    $("tbody").empty();
    for(var i=0; i<warehouse.length; i++){
        var data = warehouse[i];
        if(cluster===data["cluster"]){
            appendHTML(data);
        }
    }
}

function filterBySpace(){
    var space = $('#space-text').val();
    console.log(space);
    $("tbody").empty();
    for(var i=0; i<warehouse.length; i++){
        var data = warehouse[i];
        if(space===(data["space_available"]+'')){
            appendHTML(data);
        }
    }
}

function displayAll(){
    $("tbody").empty();
    for(var i=0; i<warehouse.length; i++){
        data = warehouse[i];
        appendHTML(data);
    }
}


function openPage(id){
localStorage.setItem("ID",id);
window.open("info.html","_self"); 
}

function setValues(){
   var id = localStorage.getItem("ID");
   
   for(var i=0; i<warehouse.length; i++){
    if((warehouse[i]["id"]+"")===id){
        data  = warehouse[i];
        $("#warehouse-name").html(data["name"])
        $("#column-id").val(data["id"]);
        $("#column-code").val(data["code"]);
        $("#column-city").val(data["city"]);
        $("#column-type").val(data["type"]);
        $("#column-cluster").val(data["cluster"]);
        $("#column-space").val(data["space_available"]);
        $("#column-registered").val(data["is_registered"]);
        $("#column-live").val(data["is_live"]);
    }
   }
}

function editFunction(){
    $(".savebtn").css("display","block")
}

function saveFunction(){
    var id = $("#column-id").val();
    var code = $("#column-code").val();
    var city = $("#column-city").val();
    var type = $("#column-type").val();
    var cluster = $("#column-cluster").val();
    var space = $("#column-space").val();
    var registered = $("#column-registered").val();
    var live = $("#column-live").val();

    var originalid = localStorage.getItem("ID");

for(var i=0; i<warehouse.length; i++){
    if((warehouse[i]["id"]+"")===originalid){
        data  = warehouse[i];
        data["code"] = code;
        data["city"] = city;
        data["type"] = type;
        data["cluster"] = cluster;
        data["space_available"]= space;
        data["is_registered"] = registered;
        data["is_live"] = live;
    }
   }

   localStorage.setItem("warehouse",JSON.stringify(warehouse));
   window.open("index.html","_self"); 
}