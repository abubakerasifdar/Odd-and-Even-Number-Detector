
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let array = input.split('-');
            let check = ''
            let result = "";
            let even = '';
            let odd = '';
            let i = array[0];
            console.log(array);
            console.log(i);
            console.log(array[array.length - 1]);
            do {
                check += i
                console.log(check, "This is the array ");
                if (check % 2 == 0) {
                    even += i + ",";
                    console.log(even, "Even Numbers");
                   
                }
                else {
                    odd += i + ",";
                    console.log(odd, "Odd Numbers");
                  
                }
                i++;
            } while (i <= array[array.length - 1])
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').style.background = "Black"
            document.getElementById('output').innerHTML = `Even Number is ${even}`;
                 document.getElementById('output2').style.display = "flex";
            document.getElementById("output2").style.background = "brown"
            document.getElementById('output2').innerHTML = `Odd Number is: ${odd}`;
        }   
