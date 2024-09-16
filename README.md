# Implementation of a GIS for the analysis of the phenomenon of Forest Fires
This is the English version of the README. For French, please see [README_FR.md](./README_FR.md).

## Description

> This project involves a very beneficial and instructive experience, which consists of implementing a decision support system supported by GIS. This is also known as cartographic visualization, using web mapping technologies after collecting various data describing the study area from the conservation department of the Bouira province.
> 
> The issue studied in the project arose from a real need expressed by the Directorate General of Forests of Algiers (DGF).

<!-- <div align="center">
  <img src="captures/Webmap%20Design.png" alt="first page" width="800px" />
</div> -->

## Tools and Development Environment
<div align="center">
       <b> HTML5 </b>
    -- <b> CSS3 </b>
    -- <b> JavaScript </b>
    -- <b> PHP </b>
    -- <b> Leaflet </b>
    -- <b> ChartJs </b>
    -- <b> AJAX   </b>
    -- <b> JQuery  </b>
    -- <b> Json ( GeoJson) </b>
    -- <b> PostgreSQL </b>
    -- <b> PostGIS </b>
    -- <b> Xampp </b>
    -- <b> QGIS </b>
</div>

## What can be done with the application (Features)
- View and navigate on the map
- Display statistics in graphical form (diagrams)
- Show various layers (access to different elements of the forest infrastructure) by navigating the map and consult the data of each layer in text form
- Search for a location (District, Municipality, and Forest Section)
- Add the geographical coordinates of a triggered fire and then visualize it on the map afterward

## Interface Presentation
<table align="center">
  <tr> 
         <th > Change Map Background </th>
         <th> Display the Number of Fires and Statistics by Municipality </th>
  </tr>
  <tr>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P1.gif" />  </td>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P2.gif" />  </td>
  </tr>
  
  <tr> 
         <th colspan="2"> Display Layers </th>  
  </tr>
  <tr>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P3.gif" />  </td>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P4.gif" />  </td>
  </tr>
  
  <tr> 
         <th >Search for a Location </th>
         <th> Display Previous Fires</th>
  </tr>
  <tr>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P5.gif" />  </td>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P6.gif" />  </td>
  </tr>
  
   <tr> 
         <th >Adding Fires</th>
         <th> Display Added Fires</th>
  </tr>
  <tr>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P7.gif" />  </td>
    <td>  <img src="https://github.com/Chahrazed-DJ/DGF-FireApp/blob/main/captures/P8.gif" />  </td>
  </tr>
</table>

## Database
<p align="center">
The database is designed from data collected by the conservation department of the Bouira province in the form of a <b>shapefile</b>, requiring analysis and processing for implementation using <b>PostgreSQL</b> with its extension <b>PostGIS</b>. </br>
The <b>shapefile</b> format is used for storing vector data and is commonly employed in geographic information systems.
</p>

<table align="center">
  <tr>
    <th>
    📝 As the data is non-shareable, the database file is not available to everyone.
    </th>
  </tr>
</table>
