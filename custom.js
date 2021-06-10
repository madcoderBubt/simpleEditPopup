let dummyData = [
    {
        id:1,
        fName:"Dinna",
        lName : "Chakma",
        email : "abc@xyz.com",
        position:"front-end-developer",
        joinDate:"1/6/2021",
        address:"Mirpur"
    },{
        id:2,
        fName:"Sudhananda",
        lName : "Biswas",
        email : "abc@xyz.com",
        position:"full-stack-developer",
        joinDate:"1/6/2021",
        address:"Mirpur"
    },{
        id:3,
        fName:"Dinna",
        lName : "Chakma",
        email : "abc@xyz.com",
        position:"front-end-developer",
        joinDate:"1/6/2021",
        address:"Mirpur"
    }
];

$(document).ready(function (){
    //Data Binding
    let strHtml = "";
    dummyData.forEach(function (data,i){
        strHtml += '<tr>';
        strHtml += '<td>' + data.id + '</td><td>' 
            +data.fName+' '+data.lName+'</td><td>'
            +data.email+'</td><td>'
            +data.address+'</td><td>'            
            +data.position+'</td><td>'+data.joinDate
            +'</td><td><button class="btn btn-info" onclick="showData('+data.id
            +')"><i class="fas fa-edit"></i></button><button class="btn btn-danger" onclick="deleteData('
            +data.id+')"><i class="fas fa-trash-alt"></i></button></td>';
        strHtml += '</tr>';
    });
    $('#tableData').append(strHtml);
});



let showData = function(id){
    if(id!=null){
        let x = dummyData.find(i=>i.id==id);
        //console.log(x);
        //$('#formData').html(x.fName);
        $('#id').val(x.id);
        $('#fName').val(x.fName);
        $('#lName').val(x.lName);
        $('#position').val(x.position);
        $('#address').val(x.address);
        $('#joinDate').val(x.joinDate);
        $('#email').val(x.email);
    }    
    $('#popUpOverlay').css('display','block');
}
let hideData = function(){
    $('#popUpOverlay').css('display','none');
    $('#formData').trigger('reset');
}
