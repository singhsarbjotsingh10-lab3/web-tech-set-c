// ============================================================
//  SET C – 30 JavaScript Tasks
//  tasks.js – loaded on tasks.html
// ============================================================

const TASKS = [
  { id: 1,  title: "Reverse a String",                   desc: "Accept a string from an input box and display it in reverse order." },
  { id: 2,  title: "Extract 3rd & 4th Characters",        desc: "Accept a string from an input box and extract the 3rd and 4th characters." },
  { id: 3,  title: "Toggle UPPER ↔ lower Case",           desc: "Convert every uppercase letter to lowercase and every lowercase letter to uppercase." },
  { id: 4,  title: "Find Substring Location",             desc: "Find the index (location) of a substring within a main string." },
  { id: 5,  title: "Count Special Characters",            desc: "Count the number of special characters (non-alphanumeric, non-space) in a string." },
  { id: 6,  title: "Find Repeated Characters",            desc: "Find all characters that appear more than once in a word entered by the user." },
  { id: 7,  title: "Create & Display Array of Numbers",   desc: "Create an array of numbers and display all elements on the page." },
  { id: 8,  title: "Find Last Element (Popup)",           desc: "Accept a comma-separated list via popup and display the last element." },
  { id: 9,  title: "Find 10th Character (Popup)",         desc: "Accept a string via popup and display its 10th character (index 9)." },
  { id: 10, title: "Merge Two Arrays",                    desc: "Accept two comma-separated lists and merge them into one array." },
  { id: 11, title: "map() – Double Elements",             desc: "Use map() to double each element in an array." },
  { id: 12, title: "Find Max & Min from Array",           desc: "Find the maximum and minimum values from a user-defined array." },
  { id: 13, title: "Splice – Insert at Index",            desc: "Insert one or more elements at a specific index using splice()." },
  { id: 14, title: "Splice – Delete Index Range",         desc: "Delete a range of elements from an array using splice()." },
  { id: 15, title: "Arithmetic Based on User Choice",     desc: "Function that performs +, −, ×, ÷ based on the operator chosen by the user." },
  { id: 16, title: "Prime Number Check",                  desc: "Function that checks whether a given number is prime or not." },
  { id: 17, title: "Palindrome Check",                    desc: "Function that checks whether a string or number is a palindrome." },
  { id: 18, title: "Fibonacci Series Generator",          desc: "Generate the Fibonacci series up to N terms entered by the user." },
  { id: 19, title: "Power of a Number",                   desc: "Calculate base raised to the power of exponent." },
  { id: 20, title: "Popup – 10-Digit Input Only",         desc: "Accept input via popup and allow only exactly 10-digit numeric values." },
  { id: 21, title: "Popup – Array String to Array",       desc: "Accept a string of comma-separated values via popup and convert it to a real array." },
  { id: 22, title: "Validate Email Format",               desc: "Check if the entered value is a valid email address using basic validation." },
  { id: 23, title: "Validate Mobile Number",              desc: "Check if the entered mobile number contains exactly 10 digits." },
  { id: 24, title: "Signup Form (Submit + Reset)",        desc: "A complete signup form with Name, Email, Password, Gender fields and Submit/Reset buttons." },
  { id: 25, title: "Display Submitted Data",              desc: "Display the data submitted from the signup form in a result section." },
  { id: 26, title: "Prevent Submit if Validation Fails",  desc: "Prevent form submission if any required field is missing or invalid." },
  { id: 27, title: "Create Person Object",                desc: "Create a person object with name, age, and gender properties." },
  { id: 28, title: "Display Object + Loop Properties",    desc: "Display the person object's values and loop through its properties using for...in." },
  { id: 29, title: "Stopwatch (Start/Pause/Stop/Reset)",  desc: "A working stopwatch using setInterval with Start, Pause, Stop, and Reset controls." },
  { id: 30, title: "Keypress – Live Character Display",   desc: "Display each character typed by the user in real time as they type." }
];

// ── Build sidebar list ──────────────────────────────────────
function buildSidebar() {
  const ul = document.getElementById('taskList');
  TASKS.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-id="${t.id}" onclick="loadTask(${t.id});return false;">
      <span class="task-num">${String(t.id).padStart(2,'0')}.</span> ${t.title}
    </a>`;
    ul.appendChild(li);
  });
}

// ── Load a task into the main area ─────────────────────────
function loadTask(id) {
  // Highlight sidebar link
  document.querySelectorAll('.task-list a').forEach(a => a.classList.remove('active-task'));
  const link = document.querySelector(`.task-list a[data-id="${id}"]`);
  if (link) link.classList.add('active-task');

  const t = TASKS.find(x => x.id === id);
  const main = document.getElementById('taskMain');
  main.innerHTML = `
    <div class="task-section">
      <div class="task-header">
        <span class="task-number">Task ${String(id).padStart(2,'0')}</span>
        <h2 class="task-title">${t.title}</h2>
      </div>
      <div class="task-desc">${t.desc}</div>
      <div class="task-body" id="taskBody"></div>
    </div>`;
  renderTask(id);
}

// ── Render task UI ──────────────────────────────────────────
function renderTask(id) {
  const body = document.getElementById('taskBody');

  switch(id) {

    // ── TASK 1: Reverse a string ──
    case 1:
      body.innerHTML = `
        <label>Enter a string</label>
        <input type="text" id="t1in" placeholder="e.g. Hello World"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t1in').value;
          document.getElementById('t1out').textContent=v.split('').reverse().join('');
        ">Reverse</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t1out"></div>`;
      break;

    // ── TASK 2: Extract 3rd & 4th characters ──
    case 2:
      body.innerHTML = `
        <label>Enter a string</label>
        <input type="text" id="t2in" placeholder="e.g. JavaScript"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t2in').value;
          const r=v.length>=4?'3rd: '+v[2]+' | 4th: '+v[3]:'String too short (need at least 4 chars)';
          document.getElementById('t2out').textContent=r;
        ">Extract</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t2out"></div>`;
      break;

    // ── TASK 3: Toggle case ──
    case 3:
      body.innerHTML = `
        <label>Enter a string</label>
        <input type="text" id="t3in" placeholder="e.g. Hello World"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t3in').value;
          const r=v.split('').map(c=>c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()).join('');
          document.getElementById('t3out').textContent=r;
        ">Toggle Case</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t3out"></div>`;
      break;

    // ── TASK 4: Find substring location ──
    case 4:
      body.innerHTML = `
        <label>Main String</label>
        <input type="text" id="t4main" placeholder="e.g. I love JavaScript"/>
        <label>Substring to find</label>
        <input type="text" id="t4sub" placeholder="e.g. love"/>
        <button class="task-btn" onclick="
          const m=document.getElementById('t4main').value;
          const s=document.getElementById('t4sub').value;
          const idx=m.indexOf(s);
          document.getElementById('t4out').textContent=idx>=0?'Found at index: '+idx:'Substring not found';
        ">Find</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t4out"></div>`;
      break;

    // ── TASK 5: Count special characters ──
    case 5:
      body.innerHTML = `
        <label>Enter a string</label>
        <input type="text" id="t5in" placeholder="e.g. Hello! @World#123"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t5in').value;
          const specials=v.split('').filter(c=>/[^a-zA-Z0-9 ]/.test(c));
          document.getElementById('t5out').textContent=
            'Special characters: '+specials.length+
            (specials.length?' [ '+specials.join(' ')+ ' ]':'');
        ">Count</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t5out"></div>`;
      break;

    // ── TASK 6: Find repeated characters ──
    case 6:
      body.innerHTML = `
        <label>Enter a word</label>
        <input type="text" id="t6in" placeholder="e.g. programming"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t6in').value.toLowerCase();
          const freq={};
          v.split('').forEach(c=>{if(c!==' ')freq[c]=(freq[c]||0)+1;});
          const repeated=Object.entries(freq).filter(([,n])=>n>1).map(([c,n])=>c+' ('+n+')');
          document.getElementById('t6out').textContent=repeated.length?'Repeated: '+repeated.join(', '):'No repeated characters found';
        ">Find Repeats</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t6out"></div>`;
      break;

    // ── TASK 7: Create & display array of numbers ──
    case 7:
      body.innerHTML = `
        <label>Enter numbers separated by commas</label>
        <input type="text" id="t7in" value="10, 20, 30, 40, 50"/>
        <button class="task-btn" onclick="
          const arr=document.getElementById('t7in').value.split(',').map(x=>x.trim());
          let html='Array: ['+arr.join(', ')+']\\n';
          arr.forEach((v,i)=>html+='Index '+i+': '+v+'\\n');
          document.getElementById('t7out').textContent=html;
        ">Display Array</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t7out"></div>`;
      break;

    // ── TASK 8: Last element via popup ──
    case 8:
      body.innerHTML = `
        <button class="task-btn" onclick="
          const input=prompt('Enter comma-separated values:','apple,banana,cherry,mango');
          if(input){
            const arr=input.split(',').map(x=>x.trim());
            document.getElementById('t8out').textContent=
              'Array: ['+arr.join(', ')+']\\nLast element: '+arr[arr.length-1];
          }
        ">Open Popup</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t8out">Click "Open Popup" to begin</div>`;
      break;

    // ── TASK 9: 10th character via popup ──
    case 9:
      body.innerHTML = `
        <button class="task-btn" onclick="
          const input=prompt('Enter a string (at least 10 characters):');
          if(input){
            const ch=input.length>=10?input[9]:'String has fewer than 10 characters';
            document.getElementById('t9out').textContent=
              'Your string: '+input+'\\n10th character (index 9): '+ch;
          }
        ">Open Popup</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t9out">Click "Open Popup" to begin</div>`;
      break;

    // ── TASK 10: Merge two arrays ──
    case 10:
      body.innerHTML = `
        <label>Array 1 (comma-separated)</label>
        <input type="text" id="t10a" value="1, 2, 3"/>
        <label>Array 2 (comma-separated)</label>
        <input type="text" id="t10b" value="4, 5, 6"/>
        <button class="task-btn" onclick="
          const a=document.getElementById('t10a').value.split(',').map(x=>x.trim());
          const b=document.getElementById('t10b').value.split(',').map(x=>x.trim());
          const merged=[...a,...b];
          document.getElementById('t10out').textContent=
            'Array 1: ['+a.join(', ')+']\\nArray 2: ['+b.join(', ')+']\\nMerged:  ['+merged.join(', ')+']';
        ">Merge</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t10out"></div>`;
      break;

    // ── TASK 11: map() double ──
    case 11:
      body.innerHTML = `
        <label>Enter numbers (comma-separated)</label>
        <input type="text" id="t11in" value="3, 7, 2, 8, 5"/>
        <button class="task-btn" onclick="
          const arr=document.getElementById('t11in').value.split(',').map(x=>Number(x.trim()));
          const doubled=arr.map(x=>x*2);
          document.getElementById('t11out').textContent=
            'Original: ['+arr.join(', ')+']\\nDoubled:  ['+doubled.join(', ')+']';
        ">Apply map()</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t11out"></div>`;
      break;

    // ── TASK 12: Max & Min from array ──
    case 12:
      body.innerHTML = `
        <label>Enter numbers (comma-separated)</label>
        <input type="text" id="t12in" value="15, 3, 99, 42, 7, 88"/>
        <button class="task-btn" onclick="
          const arr=document.getElementById('t12in').value.split(',').map(x=>Number(x.trim()));
          document.getElementById('t12out').textContent=
            'Array: ['+arr.join(', ')+']\\nMax: '+Math.max(...arr)+'\\nMin: '+Math.min(...arr);
        ">Find Max & Min</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t12out"></div>`;
      break;

    // ── TASK 13: Splice insert ──
    case 13:
      body.innerHTML = `
        <label>Array (comma-separated)</label>
        <input type="text" id="t13arr" value="10, 20, 40, 50"/>
        <label>Insert at index</label>
        <input type="number" id="t13idx" value="2"/>
        <label>Values to insert (comma-separated)</label>
        <input type="text" id="t13vals" value="30"/>
        <button class="task-btn" onclick="
          const arr=document.getElementById('t13arr').value.split(',').map(x=>x.trim());
          const idx=parseInt(document.getElementById('t13idx').value);
          const vals=document.getElementById('t13vals').value.split(',').map(x=>x.trim());
          const before=[...arr];
          arr.splice(idx,0,...vals);
          document.getElementById('t13out').textContent=
            'Before: ['+before.join(', ')+']\\nAfter:  ['+arr.join(', ')+']';
        ">Insert with splice()</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t13out"></div>`;
      break;

    // ── TASK 14: Splice delete ──
    case 14:
      body.innerHTML = `
        <label>Array (comma-separated)</label>
        <input type="text" id="t14arr" value="10, 20, 30, 40, 50, 60"/>
        <label>Start index</label>
        <input type="number" id="t14start" value="1"/>
        <label>Delete count</label>
        <input type="number" id="t14count" value="3"/>
        <button class="task-btn" onclick="
          const arr=document.getElementById('t14arr').value.split(',').map(x=>x.trim());
          const start=parseInt(document.getElementById('t14start').value);
          const cnt=parseInt(document.getElementById('t14count').value);
          const before=[...arr];
          const removed=arr.splice(start,cnt);
          document.getElementById('t14out').textContent=
            'Before:  ['+before.join(', ')+']\\nRemoved: ['+removed.join(', ')+']\\nAfter:   ['+arr.join(', ')+']';
        ">Delete with splice()</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t14out"></div>`;
      break;

    // ── TASK 15: Arithmetic based on choice ──
    case 15:
      body.innerHTML = `
        <label>Number 1</label>
        <input type="number" id="t15a" value="10"/>
        <label>Number 2</label>
        <input type="number" id="t15b" value="5"/>
        <label>Choose Operation</label>
        <select id="t15op">
          <option value="+">+ Addition</option>
          <option value="-">− Subtraction</option>
          <option value="*">× Multiplication</option>
          <option value="/">÷ Division</option>
        </select>
        <button class="task-btn" onclick="
          const a=parseFloat(document.getElementById('t15a').value);
          const b=parseFloat(document.getElementById('t15b').value);
          const op=document.getElementById('t15op').value;
          let result;
          if(op==='+') result=a+b;
          else if(op==='-') result=a-b;
          else if(op==='*') result=a*b;
          else result=b!==0?a/b:'Cannot divide by zero';
          document.getElementById('t15out').textContent=a+' '+op+' '+b+' = '+result;
        ">Calculate</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t15out"></div>`;
      break;

    // ── TASK 16: Prime check ──
    case 16:
      body.innerHTML = `
        <label>Enter a number</label>
        <input type="number" id="t16in" value="17"/>
        <button class="task-btn" onclick="
          const n=parseInt(document.getElementById('t16in').value);
          function isPrime(num){
            if(num<2) return false;
            for(let i=2;i<=Math.sqrt(num);i++) if(num%i===0) return false;
            return true;
          }
          document.getElementById('t16out').textContent=n+' is '+(isPrime(n)?'a PRIME number ✓':'NOT a prime number ✗');
        ">Check Prime</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t16out"></div>`;
      break;

    // ── TASK 17: Palindrome check ──
    case 17:
      body.innerHTML = `
        <label>Enter a string or number</label>
        <input type="text" id="t17in" value="racecar"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t17in').value.toLowerCase().replace(/[^a-z0-9]/g,'');
          const rev=v.split('').reverse().join('');
          document.getElementById('t17out').textContent=
            'Cleaned: '+v+'\\nReversed: '+rev+'\\n'+
            (v===rev?'✓ It IS a palindrome!':'✗ Not a palindrome');
        ">Check</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t17out"></div>`;
      break;

    // ── TASK 18: Fibonacci series ──
    case 18:
      body.innerHTML = `
        <label>Enter number of terms (N)</label>
        <input type="number" id="t18in" value="10" min="1" max="50"/>
        <button class="task-btn" onclick="
          const n=parseInt(document.getElementById('t18in').value);
          const fib=[0,1];
          for(let i=2;i<n;i++) fib.push(fib[i-1]+fib[i-2]);
          document.getElementById('t18out').textContent=
            'Fibonacci ('+n+' terms):\\n'+fib.slice(0,n).join(', ');
        ">Generate</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t18out"></div>`;
      break;

    // ── TASK 19: Power of a number ──
    case 19:
      body.innerHTML = `
        <label>Base</label>
        <input type="number" id="t19base" value="2"/>
        <label>Exponent</label>
        <input type="number" id="t19exp" value="8"/>
        <button class="task-btn" onclick="
          const b=parseFloat(document.getElementById('t19base').value);
          const e=parseFloat(document.getElementById('t19exp').value);
          document.getElementById('t19out').textContent=b+' ^ '+e+' = '+Math.pow(b,e);
        ">Calculate</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t19out"></div>`;
      break;

    // ── TASK 20: 10-digit popup only ──
    case 20:
      body.innerHTML = `
        <button class="task-btn" onclick="
          const input=prompt('Enter exactly 10 digits:');
          const out=document.getElementById('t20out');
          if(input===null){out.textContent='Cancelled';return;}
          if(/^[0-9]{10}$/.test(input)){
            out.className='output-box msg-ok';
            out.textContent='✓ Valid 10-digit number: '+input;
          } else {
            out.className='output-box msg-error';
            out.textContent='✗ Invalid! You entered: "'+input+'" ('+input.length+' chars). Must be exactly 10 digits.';
          }
        ">Open Popup</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t20out">Click "Open Popup" to begin</div>`;
      break;

    // ── TASK 21: Popup array string to array ──
    case 21:
      body.innerHTML = `
        <button class="task-btn" onclick="
          const input=prompt('Enter comma-separated values:','red,green,blue,yellow');
          if(input){
            const arr=input.split(',').map(x=>x.trim()).filter(x=>x!=='');
            let html='Converted to Array:\\n';
            arr.forEach((v,i)=>html+='['+i+']: '+v+'\\n');
            html+='Length: '+arr.length;
            document.getElementById('t21out').textContent=html;
          }
        ">Open Popup</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t21out">Click "Open Popup" to begin</div>`;
      break;

    // ── TASK 22: Validate email ──
    case 22:
      body.innerHTML = `
        <label>Enter Email</label>
        <input type="text" id="t22in" placeholder="e.g. sarbjot@example.com"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t22in').value;
          const valid=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v);
          const out=document.getElementById('t22out');
          out.className='output-box '+(valid?'msg-ok':'msg-error');
          out.textContent=valid?'✓ Valid email address':'✗ Invalid email format';
        ">Validate</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t22out"></div>`;
      break;

    // ── TASK 23: Validate mobile number ──
    case 23:
      body.innerHTML = `
        <label>Enter Mobile Number</label>
        <input type="text" id="t23in" placeholder="10-digit number"/>
        <button class="task-btn" onclick="
          const v=document.getElementById('t23in').value.trim();
          const valid=/^[0-9]{10}$/.test(v);
          const out=document.getElementById('t23out');
          out.className='output-box '+(valid?'msg-ok':'msg-error');
          out.textContent=valid?'✓ Valid 10-digit mobile number':'✗ Invalid! Must be exactly 10 numeric digits';
        ">Validate</button>
        <div class="output-label">Result</div>
        <div class="output-box" id="t23out"></div>`;
      break;

    // ── TASK 24 & 25 & 26: Signup form with validation & display ──
    case 24:
    case 25:
    case 26:
      body.innerHTML = `
        <div class="form-row">
          <div>
            <label>Full Name *</label>
            <input type="text" id="sfName" placeholder="Sarbjot Singh"/>
          </div>
          <div>
            <label>Age *</label>
            <input type="number" id="sfAge" placeholder="20" min="1"/>
          </div>
        </div>
        <label>Email Address *</label>
        <input type="email" id="sfEmail" placeholder="sarbjot@example.com"/>
        <label>Password * (min 6 chars)</label>
        <input type="password" id="sfPass" placeholder="••••••"/>
        <label>Gender *</label>
        <select id="sfGender">
          <option value="">-- Select --</option>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <div class="btn-row" style="margin-top:0.5rem">
          <button class="task-btn" onclick="submitSignup()">Submit</button>
          <button class="task-btn secondary" onclick="resetSignup()">Reset</button>
        </div>
        <div class="output-label">Validation / Result</div>
        <div class="output-box" id="sfOut">Fill the form and click Submit.</div>
        <div id="sfResult"></div>`;
      break;

    // ── TASK 27 & 28: Person object & display ──
    case 27:
    case 28:
      body.innerHTML = `
        <label>Name</label>
        <input type="text" id="pName" value="Sarbjot Singh"/>
        <label>Age</label>
        <input type="number" id="pAge" value="20"/>
        <label>Gender</label>
        <select id="pGender">
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <button class="task-btn" onclick="createAndDisplayPerson()">Create Object & Display</button>
        <div class="output-label">Object (for...in loop)</div>
        <div class="output-box" id="personOut"></div>`;
      break;

    // ── TASK 29: Stopwatch ──
    case 29:
      body.innerHTML = `
        <div class="stopwatch-display" id="swDisplay">00:00:00</div>
        <div class="btn-row">
          <button class="task-btn" id="swStart" onclick="swControl('start')">▶ Start</button>
          <button class="task-btn secondary" id="swPause" onclick="swControl('pause')">⏸ Pause</button>
          <button class="task-btn secondary" id="swStop" onclick="swControl('stop')">⏹ Stop</button>
          <button class="task-btn danger" id="swReset" onclick="swControl('reset')">↺ Reset</button>
        </div>
        <div class="output-label">Status</div>
        <div class="output-box" id="swStatus">Press Start to begin</div>`;
      initStopwatch();
      break;

    // ── TASK 30: Live keypress display ──
    case 30:
      body.innerHTML = `
        <label>Start typing below — characters appear live</label>
        <input type="text" id="t30in" placeholder="Type here..." autocomplete="off" oninput="
          const v=document.getElementById('t30in').value;
          document.getElementById('keypressOutput').textContent=v||'Start typing...';
          document.getElementById('t30count').textContent='Characters typed: '+v.length;
        " style="font-size:1rem;padding:0.9rem"/>
        <div class="output-label">Live Output</div>
        <div class="output-box" id="keypressOutput">Start typing...</div>
        <div class="output-box" id="t30count" style="margin-top:0.5rem;color:var(--muted)">Characters typed: 0</div>`;
      setTimeout(()=>document.getElementById('t30in')?.focus(),100);
      break;
  }
}

// ── Signup helpers (Tasks 24/25/26) ────────────────────────
function submitSignup() {
  const name   = document.getElementById('sfName').value.trim();
  const age    = document.getElementById('sfAge').value.trim();
  const email  = document.getElementById('sfEmail').value.trim();
  const pass   = document.getElementById('sfPass').value;
  const gender = document.getElementById('sfGender').value;
  const out    = document.getElementById('sfOut');
  const res    = document.getElementById('sfResult');
  const errors = [];

  if (!name)   errors.push('Name is required');
  if (!age || isNaN(age) || age < 1) errors.push('Valid age is required');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
  if (!pass || pass.length < 6) errors.push('Password must be at least 6 characters');
  if (!gender) errors.push('Please select a gender');

  if (errors.length) {
    out.className = 'output-box msg-error';
    out.textContent = '✗ Errors:\n' + errors.map(e => '  • ' + e).join('\n');
    res.innerHTML = '';
    return;
  }

  out.className = 'output-box msg-ok';
  out.textContent = '✓ Form submitted successfully!';
  res.innerHTML = `
    <div class="output-label">Submitted Data</div>
    <table class="result-table">
      <tr><td>Full Name</td><td>${name}</td></tr>
      <tr><td>Age</td><td>${age}</td></tr>
      <tr><td>Email</td><td>${email}</td></tr>
      <tr><td>Password</td><td>${'•'.repeat(pass.length)}</td></tr>
      <tr><td>Gender</td><td>${gender}</td></tr>
    </table>`;
}

function resetSignup() {
  ['sfName','sfAge','sfEmail','sfPass'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('sfGender').value = '';
  document.getElementById('sfOut').className = 'output-box';
  document.getElementById('sfOut').textContent = 'Form has been reset.';
  document.getElementById('sfResult').innerHTML = '';
}

// ── Person object (Tasks 27/28) ─────────────────────────────
function createAndDisplayPerson() {
  const person = {
    name:   document.getElementById('pName').value || 'Sarbjot Singh',
    age:    document.getElementById('pAge').value  || 20,
    gender: document.getElementById('pGender').value
  };

  let output = 'Person Object Created:\n';
  output += JSON.stringify(person, null, 2) + '\n\n';
  output += 'Using for...in loop:\n';
  for (let key in person) {
    output += `  ${key}: ${person[key]}\n`;
  }
  document.getElementById('personOut').textContent = output;
}

// ── Stopwatch (Task 29) ─────────────────────────────────────
let swTimer = null, swElapsed = 0, swRunning = false;

function initStopwatch() {
  swTimer = null; swElapsed = 0; swRunning = false;
}

function swControl(action) {
  const display = document.getElementById('swDisplay');
  const status  = document.getElementById('swStatus');
  if (!display) return;

  function formatTime(ms) {
    const h = String(Math.floor(ms/3600000)).padStart(2,'0');
    const m = String(Math.floor((ms%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((ms%60000)/1000)).padStart(2,'0');
    return `${h}:${m}:${s}`;
  }

  if (action === 'start' && !swRunning) {
    swRunning = true;
    const startTime = Date.now() - swElapsed;
    swTimer = setInterval(() => {
      swElapsed = Date.now() - startTime;
      if (display) display.textContent = formatTime(swElapsed);
    }, 100);
    if (status) status.textContent = 'Running...';
  }
  else if (action === 'pause' && swRunning) {
    clearInterval(swTimer);
    swRunning = false;
    if (status) status.textContent = 'Paused at ' + formatTime(swElapsed);
  }
  else if (action === 'stop') {
    clearInterval(swTimer);
    swRunning = false;
    if (status) status.textContent = 'Stopped at ' + formatTime(swElapsed);
  }
  else if (action === 'reset') {
    clearInterval(swTimer);
    swRunning = false;
    swElapsed = 0;
    if (display) display.textContent = '00:00:00';
    if (status) status.textContent = 'Reset. Press Start to begin.';
  }
}

// ── Init ────────────────────────────────────────────────────
buildSidebar();
