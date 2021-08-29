import React from "react";
import styles from "./PopupInfo.module.css";

const PopupInfo = ({selectedStation}) => {
  console.log(selectedStation)
  
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <span>{selectedStation.address.street},</span>
        <span>{selectedStation.address.zip},</span>
        <span>{selectedStation.address.town}</span>
        <span>({selectedStation.address.countryCode})</span>
      </div>

      <div className={styles.operator}>
        <div>
          <span>Operator</span>
          <br />
          <span>{selectedStation.operatorName}</span>
        </div>
        <div className={styles.distance}>
          <span>Latitude</span> {selectedStation.location.lat}
          <br />
          <span>Longitude</span> {selectedStation.location.lon}
          <br />
          <span>Distance</span> 15km
        </div>
      </div>

      <div className={styles.status}>
        <span>status:</span> {selectedStation.available?'available':"occupied"}
      </div>

      <div>
        <span>connectors</span>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>plug type</th>
              <th>max power</th>
            </tr>
            {selectedStation.connectors.map((connector, id)=>(
              <tr key={id}>
              <td>{connector.connectionType.id} </td>
              <td>{connector.connectionType.title}</td>
              <td>{connector.powerKW}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>

      <div>
        <span className={styles.info}>Pricing info</span>
        <br />
        <span>{selectedStation.priceInfo}</span>
      </div>
    </div>
  );
};

export default PopupInfo;
