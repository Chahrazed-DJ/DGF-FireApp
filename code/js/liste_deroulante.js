function FetchState(id)
{
    $('#state').html('');
    $.ajax(
    {
      type:'post',
      url: "php/liste_deroulante.php",
      data : 
      {
         country_id : id
      }
      ,
      success : function(data)
      {
         $('#state').html(data);
      }
    })
}
function FetchCity(id)
{ 
    $('#city').html('');
    $.ajax(
    {
      type:'post',
      url: "php/liste_deroulante.php",
      data : 
      { 
        state_id : id
      },
      success : function(data)
      {
        $('#city').html(data);
      }
    })
}
