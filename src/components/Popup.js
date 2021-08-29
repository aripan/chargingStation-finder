import React from "react";
import styles from "./Popup.module.css";

const Popup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <span>Street</span>
        <span>Zip</span>
        <span>Town</span>
        <span>(Country)</span>
      </div>

      <div className={styles.operator}>
        <div>
          <span>Operator</span>
          <br />
          <span>Operator name</span>
        </div>
        <div className={styles.distance}>
          <span>Latitude</span> 56314
          <br />
          <span>Longitude</span> 6541
          <br />
          <span>Distance</span> 15km
        </div>
      </div>

      <div className={styles.status}>
        <span>status:</span> Available
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
            <tr>
              <td>Centro </td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <span className={styles.info}>Pricing info</span>
        <br />
        <span>price</span>
      </div>
    </div>
  );
};

export default Popup;
