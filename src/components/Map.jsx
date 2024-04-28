// import React, { useEffect } from 'react';
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4maps from '@amcharts/amcharts4/maps';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// import indiaGeoData from '@amcharts/amcharts4-geodata/india2019High';
// import { Modal } from 'bootstrap'; // Import Bootstrap modal

// // Import CSS for the map and Bootstrap modal (if needed)
// import '@amcharts/amcharts4/maps/styles.css';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Adjust the path according to your project structure

// const MapChart = () => {
//     useEffect(() => {
//         // Enable animated themes
//         am4core.useTheme(am4themes_animated);

//         // Create map instance
//         const chart = am4core.create('chartdiv', am4maps.MapChart);

//         // Set map definition
//         chart.geodata = indiaGeoData;

//         // Create map polygon series
//         const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//         // Set min/max fill color for each area
//         polygonSeries.heatRules.push({
//             property: 'fill',
//             target: polygonSeries.mapPolygons.template,
//             min: chart.colors.getIndex(0).brighten(1),
//             max: chart.colors.getIndex(1).brighten(0.3),
//         });

//         // Make map load polygon data (state shapes and names) from GeoJSON
//         polygonSeries.useGeodata = true;

//         // Set heatmap values for each state
//         polygonSeries.data = [
//             // Predefined states
//             { id: "IN-JK", value: 10 },
//             { id: "IN-MH", value: 12 },
//             { id: "IN-UP", value: 10 },
//             // Add custom states
//             { id: "CUSTOM-1", value: 5 },
//             { id: "CUSTOM-2", value: 8 },
//         ];

//         // Configure series tooltip
//         const polygonTemplate = polygonSeries.mapPolygons.template;
//         polygonTemplate.tooltipText = '{name}: {value}';
//         polygonTemplate.nonScalingStroke = true;
//         polygonTemplate.strokeWidth = 0.5;

//         // Create hover state and set alternative fill color
//         const hs = polygonTemplate.states.create('hover');
//         hs.properties.fill = am4core.color('#ff7d01');

//         // Add click event listener to polygons
//         polygonTemplate.events.on('hit', function (event) {
//             const stateId = event.target.dataItem.dataContext.id;
//             // Open Bootstrap modal based on stateId
//             openModal(stateId);
//         });

//         // Function to open Bootstrap modal based on stateId
//         function openModal(stateId) {
//             const modalElement = document.getElementById(`modal-${stateId}`);
//             const modal = new Modal(modalElement);
//             modal.show();
//         }

//         return () => {
//             chart.dispose();
//         };
//     }, []);

//     return (
//         <div>
//             {/* Modal for predefined states */}
//             <div className="modal fade" id="modal-IN-JK" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Predefined State</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             {/* Modal body content for predefined state IN-JK */}
//                             This is the modal body for IN-JK.
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             {/* Additional modal footer buttons */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal for custom state CUSTOM-1 */}
//             <div className="modal fade" id="modal-CUSTOM-1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Custom State 1</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             {/* Modal body content for custom state CUSTOM-1 */}
//                             This is the modal body for CUSTOM-1.
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             {/* Additional modal footer buttons */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal for custom state CUSTOM-2 */}
//             <div className="modal fade" id="modal-CUSTOM-2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Custom State 2</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             {/* Modal body content for custom state CUSTOM-2 */}
//                             This is the modal body for CUSTOM-2.
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             {/* Additional modal footer buttons */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Map container */}
//             <div id="chartdiv" style={{ width: '100%', height: '500px' }} />
//         </div>
//     );
// };

// export default MapChart;
