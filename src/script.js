// Date Picker

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("datePickerInput");
  const datePicker = document.getElementById("datePicker");

  input.addEventListener("focus", showDatePicker);
  document.addEventListener("click", function (event) {
    if (!datePicker.contains(event.target) && event.target !== input) {
      datePicker.style.display = "none";
    }
  });

  function showDatePicker() {
    const rect = input.getBoundingClientRect();
    datePicker.style.top = `${rect.bottom + window.scrollY}px`;
    datePicker.style.left = `${rect.left + window.scrollX}px`;
    datePicker.style.display = "block";
    generateCalendar(new Date());
  }

  function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const calendar = document.createElement("table");
    const header = document.createElement("tr");

    const prevMonth = document.createElement("th");
    prevMonth.innerHTML = "&lt;";
    prevMonth.addEventListener("click", () =>
      generateCalendar(new Date(year, month - 1))
    );
    header.appendChild(prevMonth);

    const monthYear = document.createElement("th");
    monthYear.colSpan = 5;
    monthYear.innerText = `${year}-${String(month + 1).padStart(2, "0")}`;
    header.appendChild(monthYear);

    const nextMonth = document.createElement("th");
    nextMonth.innerHTML = "&gt;";
    nextMonth.addEventListener("click", () =>
      generateCalendar(new Date(year, month + 1))
    );
    header.appendChild(nextMonth);

    calendar.appendChild(header);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekRow = document.createElement("tr");
    daysOfWeek.forEach((day) => {
      const th = document.createElement("th");
      th.innerText = day;
      weekRow.appendChild(th);
    });
    calendar.appendChild(weekRow);

    let currentRow = document.createElement("tr");
    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptyCell = document.createElement("td");
      currentRow.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      if (currentRow.children.length === 7) {
        calendar.appendChild(currentRow);
        currentRow = document.createElement("tr");
      }
      const cell = document.createElement("td");
      cell.innerText = day;
      cell.addEventListener("click", () => {
        input.value = `${year}-${String(month + 1).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`;
        datePicker.style.display = "none";
      });
      currentRow.appendChild(cell);
    }

    while (currentRow.children.length < 7) {
      const emptyCell = document.createElement("td");
      currentRow.appendChild(emptyCell);
    }
    calendar.appendChild(currentRow);

    datePicker.innerHTML = "";
    datePicker.appendChild(calendar);
  }
});

// Due Date Picker Enable
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("datePickerInputs");
  const datePicker = document.getElementById("datePickers");

  input.addEventListener("focus", showDatePicker);
  document.addEventListener("click", function (event) {
    if (!datePicker.contains(event.target) && event.target !== input) {
      datePicker.style.display = "none";
    }
  });

  function showDatePicker() {
    const rect = input.getBoundingClientRect();
    datePicker.style.top = `${rect.bottom + window.scrollY}px`;
    datePicker.style.left = `${rect.left + window.scrollX}px`;
    datePicker.style.display = "block";
    generateCalendar(new Date());
  }

  function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const calendar = document.createElement("table");
    const header = document.createElement("tr");

    const prevMonth = document.createElement("th");
    prevMonth.innerHTML = "&lt;";
    prevMonth.addEventListener("click", () =>
      generateCalendar(new Date(year, month - 1))
    );
    header.appendChild(prevMonth);

    const monthYear = document.createElement("th");
    monthYear.colSpan = 5;
    monthYear.innerText = `${year}-${String(month + 1).padStart(2, "0")}`;
    header.appendChild(monthYear);

    const nextMonth = document.createElement("th");
    nextMonth.innerHTML = "&gt;";
    nextMonth.addEventListener("click", () =>
      generateCalendar(new Date(year, month + 1))
    );
    header.appendChild(nextMonth);

    calendar.appendChild(header);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekRow = document.createElement("tr");
    daysOfWeek.forEach((day) => {
      const th = document.createElement("th");
      th.innerText = day;
      weekRow.appendChild(th);
    });
    calendar.appendChild(weekRow);

    let currentRow = document.createElement("tr");
    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptyCell = document.createElement("td");
      currentRow.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      if (currentRow.children.length === 7) {
        calendar.appendChild(currentRow);
        currentRow = document.createElement("tr");
      }
      const cell = document.createElement("td");
      cell.innerText = day;
      cell.addEventListener("click", () => {
        input.value = `${year}-${String(month + 1).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`;
        datePicker.style.display = "none";
      });
      currentRow.appendChild(cell);
    }

    while (currentRow.children.length < 7) {
      const emptyCell = document.createElement("td");
      currentRow.appendChild(emptyCell);
    }
    calendar.appendChild(currentRow);

    datePicker.innerHTML = "";
    datePicker.appendChild(calendar);
  }
});

// active disable fild
function enableDueDate() {
  console.log("click me");
  const getdueDatefild = document.getElementById("datePickerInputs");
  if (getdueDatefild.disabled) {
    getdueDatefild.disabled = false;
  }
}

// get date & set date

document
  .getElementById("datePickerInputs")
  .addEventListener("click", function () {
    const getDate = document.getElementById("datePickerInput").value;
    const getsDate = document.getElementById("datePickerInputs").value;
    const strinsetDate = parseInt(getsDate);
    const StringgetDate = parseInt(getDate.slice(-2));
    const newDate = StringgetDate + strinsetDate;
    console.log(newDate);
    // set value
    const setDate = getDate.slice(0, -2);
    const finalDate = setDate + newDate;
    console.log(finalDate);
  });

document
  .getElementById("datePickerInputs")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const getDate = document.getElementById("datePickerInput").value;
      const getsDate = document.getElementById("datePickerInputs");
      const setDateget = getsDate.value;
      const strinsetDate = parseInt(setDateget);
      const StringgetDate = parseInt(getDate.slice(-2));
      const newDate = StringgetDate + strinsetDate;

      if (newDate > 31) {
        alert("this date is not this month");
      } else {
        // set value
        const setDate = getDate.slice(0, -2);
        const finalDate = setDate + newDate;
        getsDate.value = finalDate;
      }
    }
  });

// Date Picker END

// table part start
document.addEventListener("DOMContentLoaded", (event) => {
  addRow();
});

function addRow() {
  const table = document.getElementById("invoiceTable");
  const row = document.createElement("tr");

  row.innerHTML = `
          <td class="border border-gray-300 p-1">
                  <i class="uil uil-elipsis-double-v-alt"></i>
                </td>

                <td class="border border-gray-300 p-1">
                  <input type="text" class="p-2 focus:outline-blue-200 w-10" />
                </td>

                <td class="border border-gray-300 p-1">
                  <input
                    type="text"
                    class="p-2 w-full focus:outline-blue-200"
                  />
                </td>

                <td class="border border-gray-300 p-1">
                  <input
                    type="number"
                    class="p-2 w-16 focus:outline-blue-200 quantity"
                    oninput="calculateTotal(this)"
                  />
                </td>
                <td class="border border-gray-300 p-1">
                  <input
                    type="number"
                    class="p-2 focus:outline-blue-200 unitprice w-20"
                    oninput="calculateTotal(this)"
                  />
                </td>
                <td class="border border-gray-300 p-1">
                  <input type="text" class="w-24 p-2 focus:outline-blue-200" />
                </td>
               
                <td class="border border-gray-300 p-1">
                  <select
                    name="customer_name"
                    id="names"
                    class="p-2 w-52 focus:outline-blue-200"
                  >
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    ></option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Accounts Payable
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Accounts Receivable
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Bank
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Cash
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Cost Of Sales
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Damage Inventory
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Discount Earned
                    </option>
                    <option
                      value="customer"
                      class="text-black text-[1.3rem] p-2"
                    >
                      Discount Given
                    </option>
                  </select>
                </td>
                
                 <td class="border border-gray-300 p-1" onclick="vatTaxCalculate()">
                  <div id="calculateBtn">
                    <select
                      name="customer_name"
                      id="selectOption"
                      class="p-2 w-52 focus:outline-blue-200"
                    >
                      <option class="text-black text-[1.3rem] p-2"></option>
                      <option value="15%" class="text-black text-[1.3rem] p-2">
                        GST@15%
                      </option>
                      <option value="10%" class="text-black text-[1.3rem] p-2">
                        Standard@10%
                      </option>
                      <option
                        value="customer"
                        class="text-black text-[1.3rem] p-2"
                      >
                        Tax Exempt@0%
                      </option>
                    </select>
                  </div>
                </td>

                <td class="border border-gray-300 px-2 totalprice">0.00</td>
                <td class="border border-gray-300 p-1 text-center">
                  <button
                    onclick="removeRow(this)"
                    class="hover:bg-red-700 text-gray-400 font-bold py-1 px-2 rounded text-2xl"
                  >
                    X
                  </button>
                </td>
      `;

  table.appendChild(row);
}

function removeRow(button) {
  const row = button.closest("tr");
  row.remove();
  calculateGrandTotal();
}

function calculateTotal(element) {
  const row = element.closest("tr");
  const quantity = row.querySelector(".quantity").value;
  const unitPrice = row.querySelector(".unitprice").value;
  const totalPrice = row.querySelector(".totalprice");

  const total = (quantity * unitPrice).toFixed(2);
  totalPrice.innerText = total;

  calculateGrandTotal();
}

function calculateGrandTotal() {
  const rows = document.querySelectorAll("#invoiceTable tr");
  let grandTotal = 0;

  rows.forEach((row) => {
    const totalPrice = parseFloat(row.querySelector(".totalprice").innerText);
    grandTotal += isNaN(totalPrice) ? 0 : totalPrice;
  });

  const subtotal = document.getElementById("Subtotalprice");
  subtotal.innerText = grandTotal += isNaN(subtotal) ? 0 : totalPrice;

  console.log("Grand Total:", grandTotal.toFixed(2));
  console.log("Grand Total:", subtotal.toFixed(2));
}

// table part end

// vat & Tax Calculate
function vatTaxCalculate() {
  document
    .getElementById("calculateBtn")
    .addEventListener("click", function () {
      console.log("clickmeeeeeee");
      const selectElement = document.getElementById("selectOption");
      const selectedValue = selectElement.value;
      const subtotal = document.getElementById("Subtotalprice");
      const getSubtotal = subtotal.innerText;

      if (selectedValue == "15%") {
        const calculateAmountTotal = (15 / 100) * getSubtotal;
        const TotalTaxAmount = document.getElementById("taxTotal");
        const StringTaxAmount = parseFloat(TotalTaxAmount.innerText);
        TotalTaxAmount.innerText = calculateAmountTotal.toFixed(2);
        const MaxAmount = document.getElementById("MaxtotalAmount");
        const StringMaxAmount = parseFloat(MaxAmount);
        // convert int number
        const stringGetsubTotal = parseFloat(getSubtotal);
        const stringcalculateAmount = parseFloat(calculateAmountTotal);
        MaxAmount.innerText = stringGetsubTotal + stringcalculateAmount;
      } else if (selectedValue == "10%") {
        const calculateAmountTotal = (10 / 100) * getSubtotal;
        const TotalTaxAmount = document.getElementById("taxTotal");
        const StringTaxAmount = parseFloat(TotalTaxAmount.innerText);
        TotalTaxAmount.innerText = calculateAmountTotal.toFixed(2);
        const MaxAmount = document.getElementById("MaxtotalAmount");
        const StringMaxAmount = parseFloat(MaxAmount);
        // convert int number
        const stringGetsubTotal = parseFloat(getSubtotal);
        const stringcalculateAmount = parseFloat(calculateAmountTotal);
        MaxAmount.innerText = stringGetsubTotal + stringcalculateAmount;
      } else {
        const calculateAmountTotal = (0 / 100) * getSubtotal;
        const TotalTaxAmount = document.getElementById("taxTotal");
        const StringTaxAmount = parseFloat(TotalTaxAmount.innerText);
        TotalTaxAmount.innerText = calculateAmountTotal.toFixed(2);
        const MaxAmount = document.getElementById("MaxtotalAmount");
        const StringMaxAmount = parseFloat(MaxAmount);
        // convert int number
        const stringGetsubTotal = parseFloat(getSubtotal);
        const stringcalculateAmount = parseFloat(calculateAmountTotal);
        MaxAmount.innerText = stringGetsubTotal + stringcalculateAmount;
      }
    });
}

// tax Exclusive & tax Inclusive

document.getElementById("taxExclusive").addEventListener("click", function () {
  const selectElement = document.getElementById("selectOptions");
  const selectedValue = selectElement.value;
  const subtotal = document.getElementById("Subtotalprice");
  const getSubtotal = subtotal.innerText;

  if (selectedValue == "Exclusive") {
    const calculateAmountTotal = (25 / 100) * getSubtotal;
    const TotalTaxAmount = document.getElementById("taxTotal");
    const StringTaxAmount = parseFloat(TotalTaxAmount.innerText);
    TotalTaxAmount.innerText = calculateAmountTotal.toFixed(2);
    const MaxAmount = document.getElementById("MaxtotalAmount");
    const StringMaxAmount = parseFloat(MaxAmount);
    // convert int number
    const stringGetsubTotal = parseFloat(getSubtotal);
    const stringcalculateAmount = parseFloat(calculateAmountTotal);
    MaxAmount.innerText = stringGetsubTotal + stringcalculateAmount;
  } else if (selectedValue == "Inclusive") {
    const calculateAmountTotal = (20 / 100) * getSubtotal;
    const TotalTaxAmount = document.getElementById("taxTotal");
    const StringTaxAmount = parseFloat(TotalTaxAmount.innerText);
    TotalTaxAmount.innerText = calculateAmountTotal.toFixed(2);
    const MaxAmount = document.getElementById("MaxtotalAmount");
    const StringMaxAmount = parseFloat(MaxAmount);
    // convert int number
    const stringGetsubTotal = parseFloat(getSubtotal);
    const stringcalculateAmount = parseFloat(calculateAmountTotal);
    MaxAmount.innerText = stringGetsubTotal + stringcalculateAmount;
  } else {
    const calculateAmountTotal = (0 / 100) * getSubtotal;
    const TotalTaxAmount = document.getElementById("taxTotal");
    const StringTaxAmount = parseFloat(TotalTaxAmount.innerText);
    TotalTaxAmount.innerText = calculateAmountTotal.toFixed(2);
    const MaxAmount = document.getElementById("MaxtotalAmount");
    const StringMaxAmount = parseFloat(MaxAmount);
    // convert int number
    const stringGetsubTotal = parseFloat(getSubtotal);
    const stringcalculateAmount = parseFloat(calculateAmountTotal);
    MaxAmount.innerText = stringGetsubTotal + stringcalculateAmount;
  }
});

//Add Note & History
document.getElementById("addButton").addEventListener("click", function () {
  console.log("click");
  const getCustomer = document.getElementById("names");
  const getCustomerName = getCustomer.value;
  const getInvoiceNumber = document.getElementById("getInvoice");
  const getInvoiceValue = getInvoiceNumber.value;
  const setInvoiceData = document.getElementById("setHistory");
  const invoiceDate = new Date().toLocaleString();
  const invoiceSummary = `
            ${invoiceDate},demo created
           ${getInvoiceValue} to ${getCustomerName}`;
  setInvoiceData.innerText = invoiceSummary;
});
