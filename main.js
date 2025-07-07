// --- Create floating window container ---
const windowDiv = document.createElement('div');
windowDiv.style.position = 'fixed';
windowDiv.style.top = '100px';
windowDiv.style.left = '100px';
windowDiv.style.backgroundColor = '#fff';
windowDiv.style.border = '1px solid #ccc';
windowDiv.style.padding = '16px';
windowDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
windowDiv.style.zIndex = '9999';
windowDiv.style.borderRadius = '8px';
windowDiv.style.fontFamily = 'sans-serif';
windowDiv.style.width = '320px';
windowDiv.id = 'programCardWindow';

// --- Dragging ---
let isDragging = false, offsetX, offsetY;

windowDiv.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - windowDiv.offsetLeft;
  offsetY = e.clientY - windowDiv.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    windowDiv.style.left = (e.clientX - offsetX) + 'px';
    windowDiv.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

// --- Title bar ---
const titleBar = document.createElement('div');
titleBar.style.display = 'flex';
titleBar.style.justifyContent = 'space-between';
titleBar.style.alignItems = 'flex-start';
titleBar.style.marginBottom = '0';
titleBar.style.userSelect = 'none';

const title = document.createElement('h3');
title.textContent = 'Program Card';
title.style.margin = '0';
title.style.fontSize = '18px';
title.id = 'programCardTitle';

const closeBtn = document.createElement('span');
closeBtn.textContent = 'X';
closeBtn.style.cursor = 'pointer';
closeBtn.style.fontSize = '18px';
closeBtn.style.marginLeft = '8px';
closeBtn.style.color = '#888';
closeBtn.style.padding = '0px';
closeBtn.onclick = () => windowDiv.remove();

titleBar.appendChild(title);
titleBar.appendChild(closeBtn);
windowDiv.appendChild(titleBar);

// --- Input + select row ---
const rowDiv = document.createElement('div');
rowDiv.style.display = 'flex';
rowDiv.style.gap = '8px';
rowDiv.style.marginBottom = '12px';

// Text input
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Swipe ID';
input.style.width = '40%';
input.style.height = '20px';
input.style.padding = '6px';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '4px';
input.style.margin = '10px 0';
input.style.cursor = 'text';

input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        document.getElementById('program').click();
      }
    });

rowDiv.appendChild(input);

// Select
const select = document.createElement('select');
select.style.width = '60%';
select.style.height = '34px';
select.style.padding = '6px';
select.style.border = '1px solid #ccc';
select.style.borderRadius = '4px';
select.style.margin = '10px 0';

const options = [
  { value: "1", text: "CONF 802" },
  { value: "2", text: "CONF 803" },
  { value: "3", text: "CONF 804" },
  { value: "4", text: "CONF 806" },
  { value: "6", text: "CONF 807" },
  { value: "8", text: "CONF 810" },
  { value: "9", text: "CONF 811" },
  { value: "10", text: "CONF 812" },
  { value: "11", text: "CONF 813" },
  { value: "12", text: "CONF 814" },
  { value: "13", text: "CONF 820" },
  { value: "15", text: "CONF 821" },
  { value: "17", text: "CONF 822" },
  { value: "407", text: "CONF 825" },
  { value: "408", text: "CONF 826" },
  { value: "409", text: "CONF 827" },
  { value: "410", text: "CONF 828" },
  { value: "411", text: "CONF 829" },
  { value: "412", text: "CONF 830" },
  { value: "384", text: "CONF KAHLERT 1ST FLOOR 1341-1364" },
  { value: "385", text: "CONF KAHLERT 1ST FLOOR 1441-1464" },
  { value: "432", text: "CONF KAHLERT 1ST FLOOR 1541-1564" },
  { value: "386", text: "CONF KAHLERT 2ND FLOOR 2201-2264" },
  { value: "321", text: "CONF KAHLERT 2ND FLOOR 2301-2364" },
  { value: "387", text: "CONF KAHLERT 2ND FLOOR 2401-2464" },
  { value: "433", text: "CONF KAHLERT 2ND FLOOR 2501-2564" },
  { value: "388", text: "CONF KAHLERT 3RD FLOOR 3201-3264" },
  { value: "391", text: "CONF KAHLERT 3RD FLOOR 3301-3364" },
  { value: "392", text: "CONF KAHLERT 3RD FLOOR 3401-3464" },
  { value: "434", text: "CONF KAHLERT 3RD FLOOR 3501-3564" },
  { value: "393", text: "CONF KAHLERT 4TH FLOOR 4201-4264" },
  { value: "401", text: "CONF KAHLERT 4TH FLOOR 4301-4364" },
  { value: "402", text: "CONF KAHLERT 4TH FLOOR 4401-4464" },
  { value: "435", text: "CONF KAHLERT 4TH FLOOR 4501-4564" },
  { value: "405", text: "CONF KAHLERT 5TH FLOOR 5201-5264" },
  { value: "437", text: "CONF KAHLERT 5TH FLOOR 5301-5364" },
  { value: "406", text: "CONF KAHLERT 5TH FLOOR 5401-5464" },
  { value: "436", text: "CONF KAHLERT 5TH FLOOR 5501-5564" },
  { value: "403", text: "CONF MHC" },
  { value: "85", text: "CONF Summer Conferencing Staff" },
  { value: "426", text: "HRE MHC Workroom" }
];

options.forEach(({ value, text }) => {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  select.appendChild(option);
});

rowDiv.appendChild(select);

windowDiv.appendChild(rowDiv);

// Clear + Submit Buttons
const buttonDiv = document.createElement('div');
buttonDiv.style.display = 'flex';
buttonDiv.style.gap = '8px';
buttonDiv.style.marginBottom = '12px'; 

// --- Submit button ---
const submit = document.createElement('button');
submit.textContent = 'Add';
submit.style.padding = '8px 12px';
submit.style.border = 'none';
submit.style.backgroundColor = '#007BFF';
submit.style.color = 'white';
submit.style.borderRadius = '4px';
submit.style.cursor = 'pointer';

submit.onclick = () => {
  input.focus();
  input.select();
  submit.style.backgroundColor = '#22222208';
  submit.disabled = true;
  submit.style.cursor = 'wait';
  clear.style.backgroundColor = '#22222208';
  clear.disabled = true;
  clear.style.cursor = 'wait';
  program.style.backgroundColor = '#22222208';
  program.disabled = true;
  program.style.cursor = 'wait';
  const cardVal = input.value;
  const bldgVal = select.value;
  getPerson(cardVal).then(person => {
    setAccess(person, bldgVal).then(() => {
      submit.style.backgroundColor = '#007BFF';
  	  submit.disabled = false;
  	  submit.style.cursor = 'pointer';
  	  clear.style.backgroundColor = '#007BFF';
  	  clear.disabled = false;
  	  clear.style.cursor = 'pointer';
      program.style.backgroundColor = '#007BFF';
  	  program.disabled = false;
  	  program.style.cursor = 'pointer';
    });
  });
};

// Clear Button
const clear = document.createElement('button');
clear.textContent = 'Clear';
clear.style.padding = '8px 12px';
clear.style.border = 'none';
clear.style.backgroundColor = '#007BFF';
clear.style.color = 'white';
clear.style.borderRadius = '4px';
clear.style.cursor = 'pointer';

clear.onclick = () => {
  input.focus();
  input.select();
  submit.style.backgroundColor = '#22222208';
  submit.disabled = true;
  submit.style.cursor = 'wait';
  clear.style.backgroundColor = '#22222208';
  clear.disabled = true;
  clear.style.cursor = 'wait';
  program.style.backgroundColor = '#22222208';
  program.disabled = true;
  program.style.cursor = 'wait';
  const cardVal = input.value;
  getPerson(cardVal).then(person => {
    getAccess(person).then(bldgs => {
      removeAccess(bldgs, person).then( () => {
        submit.style.backgroundColor = '#007BFF';
  		submit.disabled = false;
  		submit.style.cursor = 'pointer';
  		clear.style.backgroundColor = '#007BFF';
  		clear.disabled = false;
  		clear.style.cursor = 'pointer';
        program.style.backgroundColor = '#007BFF';
  	  	program.disabled = false;
  	  	program.style.cursor = 'pointer';
      });
    });
  });
};

// --- Program button ---
const program = document.createElement('button');
program.textContent = 'Program';
program.style.padding = '8px 12px';
program.style.border = 'none';
program.style.backgroundColor = '#007BFF';
program.style.color = 'white';
program.style.borderRadius = '4px';
program.style.cursor = 'pointer';
program.id = 'program';

program.onclick = () => {
  input.focus();
  input.select();
  submit.style.backgroundColor = '#22222208';
  submit.disabled = true;
  submit.style.cursor = 'wait';
  clear.style.backgroundColor = '#22222208';
  clear.disabled = true;
  clear.style.cursor = 'wait';
  program.style.backgroundColor = '#22222208';
  program.disabled = true;
  program.style.cursor = 'wait';
  const cardVal = input.value;
  const bldgVal = select.value;
  getPerson(cardVal).then(person => {
    getAccess(person).then(bldgs => {
      removeAccess(bldgs, person).then( () => {
        setAccess(person, bldgVal).then(() => {
      	  submit.style.backgroundColor = '#007BFF';
  	  	  submit.disabled = false;
  	  	  submit.style.cursor = 'pointer';
  	  	  clear.style.backgroundColor = '#007BFF';
  	  	  clear.disabled = false;
  	  	  clear.style.cursor = 'pointer';
          program.style.backgroundColor = '#007BFF';
  	  	  program.disabled = false;
  	  	  program.style.cursor = 'pointer';
        });
      });
    });
  });
};

buttonDiv.appendChild(clear);
buttonDiv.appendChild(submit);
buttonDiv.appendChild(program);
windowDiv.appendChild(buttonDiv);
document.body.appendChild(windowDiv);

async function getPerson(cardNum) {
  const response = await fetch('https://utah.atriumcampus.com/people/get_people/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'search_par[]': 'card_number',
      'search_qual[]': 'contains',
      'value_box[]': cardNum,
      'value_box2[]': '',
      'value_box_key[]': '',
      'value_box3[]': '',
      'value_box4[]': ''
    }),
    credentials: 'include'
  });

  const htmlString = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  const results = doc.getElementsByClassName('name');
  for (const result of results) {
    if (result.innerText.includes('CONFERENCE')) {
      const personIdLocal = result.parentElement.children[3].value;
      return personIdLocal;
    }
  }

  return null;
}

async function setAccess(person, bldg) {
  const response = fetch('https://utah.atriumcampus.com/systems/people/add_access_group', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
  },
  body: new URLSearchParams({
    person_id: person,
    add_access_group: bldg
  }),
  credentials: 'include'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Access group added successfully:', data);
  })
  .catch(error => {
    console.error('Failed to add access group:', error);
  });
}

function getValueDifferences(accessGroups, options) {
  const accessValues = new Set(accessGroups.map(group => group.value));
  const optionValues = new Set(options.map(opt => opt.value));

  const notInOptions = [...accessValues].filter(val => !optionValues.has(val));
  const notInAccess = [...optionValues].filter(val => !accessValues.has(val));

  return [...notInOptions, ...notInAccess];
}

async function getAccess(person) {
  const response = await fetch('https://utah.atriumcampus.com/systems/people/access_group_list/' + person, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: new URLSearchParams({
      url: '/systems/people/access_group_list/' + person,
      modalDialogWidth: '430px'
    }),
    credentials: 'include'
  });
  
  const htmlString = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  
  const accessOpts = Array.from(doc.querySelectorAll('select option'));

  const accessGroups = accessOpts.map(opt => ({
    value: opt.value.replace(/[^0-9]/g, ''),
    text: opt.textContent.trim()
  }));
  
  const access = getValueDifferences(accessGroups, options);
  return access;
  
}

async function removeAccess(bldgs, person) {
  for (const bldg of bldgs) {
    let response = fetch('https://utah.atriumcampus.com/people/delete_access_group', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: new URLSearchParams({
        person_id: person,
        group_id: bldg
      }),
      credentials: 'include'
    });
  }
}
