//Starts the function only when page is loaded.
//starts a timeout of 1000 to wait for all the grades to show up.
window.onload = setTimeout(function () {
	//if the url of the page is this url    ↓   then...
	if (window.location.href.indexOf('https://web.mashov.info/students/main/students') != -1 && window.location.href.indexOf('/regularGrades') != -1) {

		//a variable that will contain all the grades.
		let Sum = 0;
		//loops over all the grades
		for (let i = 1; i <= $("#mainView > mat-sidenav-content > mshv-student > mshv-student-regulargrades > mat-list  > mat-list-item").length; i++) {
			const pp = "#mainView > mat-sidenav-content > mshv-student > mshv-student-regulargrades > mat-list > mat-list-item:nth-child(" + i + ") > div > div:nth-child(4) > div:nth-child(2)";
			if(!($(pp)[0].textContent.includes("אין ציון"))){}else{
				//adds the grade to the sum
				Sum += parseInt($(pp)[0].textContent);
			}
		}
		//divides the sum by the number of grades(to create a sum of the grades).
		let finalSum = Sum / ($("#mainView > mat-sidenav-content > mshv-student > mshv-student-regulargrades > mat-list  > mat-list-item").length);
		//adds the final sum up of the grades to the page(html).
		let bb = document.createTextNode("‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ממוצע הציונים שלך : " + finalSum.toFixed(2));
		$("#mshv-main-toolbar > span")[0].appendChild(bb);
	}
}, 1000);
//   ↑   this is the timeout number(miliseconds).