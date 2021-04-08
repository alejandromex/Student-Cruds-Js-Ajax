$( document ).ready(function() {

    var data;

    $.ajax({  
        type: "GET",
        url: "http://localhost:58909/api/student",
        success: function (result) {  
            data = result;            
            var table = $("#tableStudents tbody");
            $.each(data, function(idx, elem){
                table.append("<tr><td>"+elem.studentId+"</td><td>"+elem.name+"</td>   <td>"+elem.surname+"</td>"+"</td>   <td>"+elem.age+"</td>"+"</td>   <td>"+elem.school+"</td></tr>");
            });
        }  
    })  


    const getAll = function()
    {
        var n = 1;
        $.ajax({  
            type: "GET",
            url: "http://localhost:58909/api/student",
            success: function (result) {  
                data = result;            
                var table = $("#tableStudents tbody");
                var dropdown = $("#students-drop");
                
                table.html("");
                dropdown.html("");
                $.each(data, function(idx, elem){
                    table.append("<tr><td>"+elem.studentId+"</td><td>"+elem.name+"</td>   <td>"+elem.surname+"</td>"+"</td>   <td>"+elem.age+"</td>"+"</td>   <td>"+elem.school+"</td></tr>");
                    dropdown.append("<option value='"+elem.name+"'>"+elem.name+"</option>");    
                    n++;
                });
            }  
        })  
    }



    $("#register").click(function() {

        $("#title-actions").text("Register");
        $("#tableStudents").hide();
        $("#form-register").show();
        $("#deleteAction").hide();
        $("#updateAction").hide();
    });

    $("#getall").click(function()
    {
        $("#title-actions").text("Get All");
        $("#tableStudents").show();
        $("#form-register").hide();
        $("#deleteAction").hide();
        $("#updateAction").hide();
        getAll();
    });

    $("#delete").click(function(){
        $("#title-actions").text("Delete");
        $("#tableStudents").hide();
        $("#form-register").hide();
        $("#updateAction").hide();
        $("#deleteAction").show();
    });

    $("#update").click(function(){

        $("#title-actions").text("Update");
        $("#tableStudents").hide();
        $("#form-register").hide();
        $("#deleteAction").hide();
        $("#updateAction").show();

        getAll();

    });




    $("#register-btn").click(function(){


        var name = $("#inputName").val();
        var surname = $("#inputSurname").val();
        var age = $("#inputAge").val();
        var school = $("#inputSchool").val();

        student = {
            "m_Name": name,
            "m_Surname": surname,
            "m_Age": parseInt(age),
            "m_School": school

        };
        data: JSON.stringify(student),


        console.log(student);

        $.ajax({

            type: "POST",
            url: "http://localhost:58909/api/student",
            data: JSON.stringify(student),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function(data){
                $("#inputName").val("");
                $("#inputSurname").val("");
                $("#inputAge").val("");
                $("#inputSchool").val("");

                Swal.fire(
                'Good job!',
                'Register Success!',
                'success'
                )
            }


        });

    });

    $("#delete-btn").click(function(){

        var name = $("#inputNameDelete").val();
        console.log("Hola mundo");
        $.ajax({

            type: "DELETE",
            url: "http://localhost:58909/api/student/"+name,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function(data){
                $("#inputNameDelete").val("");
                Swal.fire(
                'Good job!',
                'Student Dropped!',
                'warning'
                )
            }


        });

        


    });

    var studentUpdate= {};
    $( "#students-drop" ).change(function(){

        var name = $("#students-drop").val();

        $.ajax({

            type: "GET",
            url: "http://localhost:58909/api/student/"+name,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function(data){

                studentUpdate = data;
                $("#inputNameUpdate").val(data.name);
                $("#inputSurnameUpdate").val(data.surname);
                $("#inputAgeUpdate").val(data.age);
                $("#inputSchoolUpdate").val(data.school);
                $("#id-hidden").val(data.studentId);
            }

        });

    });

    $("#update-btn").click(function(){

        
        var name = $("#inputNameUpdate").val();
        var surname = $("#inputSurnameUpdate").val();
        var age = $("#inputAgeUpdate").val();
        var school = $("#inputSchoolUpdate").val();
        var id = $("#id-hidden").val();

        student = {
            "m_Name": name,
            "m_Surname": surname,
            "m_Age": parseInt(age),
            "m_School": school,
            "m_id": id
        };

        $.ajax({

            type: "PUT",
            url: "http://localhost:58909/api/student/",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(student),
            success: function(data){
                $("#inputNameDelete").val("");
                Swal.fire(
                'Good job!',
                'Student Updated!',
                'success'
                )
            }


        });



    });


});