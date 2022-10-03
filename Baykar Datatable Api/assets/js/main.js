$(document).ready(function () {
    $('#example').DataTable({
        dom: 'Bfrtip',
      
        ajax: 'all.json',
        columns: [
            { data: 'name.common',
            render: function (data, type) {
                        if (type === 'display') {
                       
    
                            if (data[0] < 'H') {
                               
                            } 
    
                            return '<td> <p>' + data + '</p></td> <input value="' + data + '"/>';
                        }
    
                        return data;
                },
        
            },
            { data: 'region',
                render: function (data, type) {
                        if (type === 'display') {
                       
    
                            if (data[0] < 'H') {
                               
                            } 
    
                            return '<td> <p>' + data + '</p></td> <input value="' + data + '"/>';
                        }
    
                        return data;
                },

        
            },
            { data: 'area',
            render: function (data, type) {
                        if (type === 'display') {
                       
    
                            if (data[0] < 'H') {
                               
                            } 
    
                            return '<td> <p>' + data + '</p></td> <input value="' + data + '"/>';
                        }
    
                        return data;
                },
        
            },
            { data: 'population',
            render: function (data, type) {
                        if (type === 'display') {
                       
    
                            if (data[0] < 'H') {
                               
                            } 
    
                            return '<td> <p>' + data + '</p></td> <input value="' + data + '"/>';
                        }
    
                        return data;
                },
            },
            { data: 'altSpellings[1]',
            render: function (data, type) {
                        if (type === 'display') {
                       
    
                            if (data[0] < 'H') {
                               
                            } 
    
                            return '<td> <p>' + data + '</p></td> <input value="' + data + '"/>';
                        }
    
                        return data;
                },
        
            },
            
        ],
        buttons: [
            {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [ 0, ':visible' ]
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 3, 4 ]
                }
            },
            'colvis'
        ],
        columnDefs: [
            {
                orderable: false,
               
            },
        ],
        
    });
  
});
