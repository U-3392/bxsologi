import React, { useState, useEffect } from 'react';

const data = './data.json'
function createTable(data) {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
  
    // Append the table head and body to table
    table.appendChild(tableHead);
    table.appendChild(tableBody);
  
    // Creating table head
    let row = tableHead.insertRow();
    Object.keys(data[0]).forEach(key => {
      let th = document.createElement('th');
      th.textContent = key.toUpperCase();
      row.appendChild(th);
    });
  
    // Creating table body
    data.forEach(item => {
      let row = tableBody.insertRow();
      Object.values(item).forEach(value => {
        let cell = row.insertCell();
        cell.textContent = value;
      });
    });
  
    // Append the table to the HTML document
    document.getElementById('yourElementId').appendChild(table);
  }

export default createTable;