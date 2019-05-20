import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { isValidDate, dateToCadExt } from './utils/utils';
@Injectable()
export class UtilsService {
  constructor() {}
  /* Rebem  */
  // calculCapacidadPercent(
  // 	capacidadPorcentaje: number,
  // 	finDobleMovimiento: string,
  // 	ocupacion: number,
  // 	capacidadCalculada: number
  // ): number {
  // 	let _retorn: number;
  // 	if (finDobleMovimiento === 'N') {
  // 		if (ocupacion == 0 && capacidadCalculada == 0) {
  // 			_retorn = 0;
  // 		} else {
  // 			_retorn = (ocupacion / capacidadCalculada) * 100;
  // 		}
  // 		//_retorn = (ocupacion / capacidadCalculada) * 100;
  // 	} else {
  // 		_retorn = capacidadPorcentaje;
  // 	}
  // 	return _retorn;
  // }

  //Devuelve un color
  // extreuColor(capacitatPorcentaje: number, estado: string = null): string {
  // 	let color: string;
  // 	if (estado !== 'FI') {
  // 		if (capacitatPorcentaje >= 0 && capacitatPorcentaje <= 50) {
  // 			color = '#77DA64'; //GREEN
  // 		} else if (capacitatPorcentaje > 50 && capacitatPorcentaje <= 80) {
  // 			color = '#F5A623'; //ORANGE
  // 		} else if (capacitatPorcentaje > 80 && capacitatPorcentaje < 100) {
  // 			color = '#D0021B'; //RED
  // 		} else if (capacitatPorcentaje >= 100) {
  // 			color = '#484848'; //GRAY
  // 		}
  // 	} else {
  // 		color = '#97A1A8'; //GRAY LIGHT
  // 	}
  // 	return color;
  // }

  //Devuelve una clase
  // extreuColorExten(capacitatPorcentaje: number, estado: string = null): string {
  // 	let classe: string;
  // 	if (estado !== 'FI') {
  // 		if (capacitatPorcentaje >= 0 && capacitatPorcentaje <= 50) {
  // 			classe = 'green-color-event pointer color-verde'; //GREEN
  // 		} else if (capacitatPorcentaje > 50 && capacitatPorcentaje <= 80) {
  // 			classe = 'orange-color-event pointer'; //ORANGE
  // 		} else if (capacitatPorcentaje > 80 && capacitatPorcentaje < 100) {
  // 			classe = 'red-color-event pointer'; //RED
  // 		} else if (capacitatPorcentaje >= 100) {
  // 			classe = 'grey-color-event pointer'; //GRAY
  // 		}
  // 	} else {
  // 		classe = '.grey-color-event-light pointer color-negro'; //GRAY LIGHT
  // 	}
  // 	return classe;
  // }

  // calendarTrans(idioma: string): any {
  // 	if (idioma === 'es') {
  // 		return {
  // 			firstDayOfWeek: 1,
  // 			dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  // 			dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jueves', 'Viernes', 'Sáb'],
  // 			dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  // 			monthNames: [
  // 				'Enero',
  // 				'Febrero',
  // 				'Marzo',
  // 				'Abril',
  // 				'Mayo',
  // 				'Junio',
  // 				'Julio',
  // 				'Agosto',
  // 				'Septiembre',
  // 				'Octubre',
  // 				'Noviembre',
  // 				'Diciembre'
  // 			],
  // 			monthNamesShort: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ag', 'Sep', 'Oct', 'Nov', 'Dic'],
  // 			today: 'Today',
  // 			clear: 'Clear'
  // 		};
  // 	} else if (idioma === 'ca') {
  // 		return {
  // 			firstDayOfWeek: 1,
  // 			dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
  // 			dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
  // 			dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
  // 			monthNames: [
  // 				'Gener',
  // 				'Febrer',
  // 				'Març',
  // 				'Abril',
  // 				'Maig',
  // 				'Juny',
  // 				'Juliol',
  // 				'Agost',
  // 				'Setembre',
  // 				'Octubre',
  // 				'Novembre',
  // 				'Desembre'
  // 			],
  // 			monthNamesShort: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ag', 'Sep', 'Oct', 'Nov', 'Dic'],
  // 			today: 'Avui',
  // 			clear: 'Borrar'
  // 		};
  // 	} else if (idioma === 'fr') {
  // 		return {
  // 			firstDayOfWeek: 1,
  // 			dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  // 			dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
  // 			dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  // 			monthNames: [
  // 				'Janvier',
  // 				'Février',
  // 				'Mars',
  // 				'Avril',
  // 				'Mai',
  // 				'Juin',
  // 				'Juillet',
  // 				'Août',
  // 				'Septembre',
  // 				'Octobre',
  // 				'Novembre',
  // 				'Décembre'
  // 			],
  // 			monthNamesShort: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ag', 'Sep', 'Oct', 'Nov', 'Dic'],
  // 			today: "Aujourd'hui",
  // 			clear: 'Supprimer'
  // 		};
  // 	}
  // }

  // gerUrlPaises(idioma: string): string {
  // 	if (idioma === 'es') {
  // 		let esUrl = './assets/resources/countries_es.json';
  // 		return esUrl;
  // 	} else if (idioma === 'ca') {
  // 		let caUrl = './assets/resources/countries_cat.json';
  // 		return caUrl;
  // 	} else if (idioma === 'fr') {
  // 		let frUrl = './assets/resources/countries_fr.json';
  // 		return frUrl;
  // 	}
  // }

  // filtrarFranges(llistaOriginal: Array<any>): Array<any> {
  // 	let llistaResultat: Array<any>;
  // 	llistaResultat = llistaOriginal.filter(item => item.estado === 'AC');
  // 	return llistaResultat;
  // }

  // downloadFile(blob: any, type: string, filename: string) {
  // 	const theFile = new Blob([blob], { type: 'application/octet-stream' });

  // 	//const url = window.URL.createObjectURL(new Blob(binaryData));

  // 	if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  // 		window.navigator.msSaveOrOpenBlob(theFile, filename);
  // 	} else {
  // 		const url = window.URL.createObjectURL(theFile);
  // 		//const url = (window.URL ? URL : URL).createObjectURL(theFile);
  // 		//window.open(url);
  // 		const link = document.createElement('a');
  // 		document.body.appendChild(link);
  // 		link.href = url;
  // 		link.download = filename;
  // 		link.click();
  // 	}
  // }

  twoDigits(cad: string): string {
    //cad = StringUtil.trim(cad);
    if (cad.toString().length === 1) cad = '0' + cad;
    return cad;
  }

  convertFechaHora(fecha: Date, hora: Date): string {
    const cad = `${fecha.getFullYear()}${this.twoDigits(
      (fecha.getMonth() + 1).toString()
    )}${this.twoDigits(fecha.getDate().toString())}${this.twoDigits(
      hora.getHours().toString()
    )}${this.twoDigits(hora.getMinutes().toString())}`;
    return cad;
  }

  translateError(error: HttpErrorResponse): string {
    let descError: string;
    if (error.status !== 400) {
      const err = error.status;
      //   this.translate.get('ERROR.' + err).subscribe(data => {
      //     descError = data;
      //   });
      return `${error.status} --> ${descError} :: ${error.url}`;
    } else {
      if (error.error.errors) {
        const err = error.error.errors[0];

        // this.translate.get('ERROR.' + err.codigoError).subscribe(data => {
        //   descError = data;
        // });

        return `:: ${descError}`;
      } else return '';
    }
  }

  validateEmail(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;

    return EMAIL_REGEXP.test(c.value)
      ? null
      : {
          validateEmail: {
            valid: false
          }
        };
  }

  validateDate(c: FormControl) {
    //const dateRegEx = new RegExp(/^\d{1,2}\.\d{1,2}\.\d{4}$/);
    if (c.value === null || c.value === '') {
      return null;
    }
    return isValidDate(dateToCadExt(c.value)) ? null : { date: true };
  }

  validatePhone(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }
    let PHONE_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
    return PHONE_REGEXP.test(c.value)
      ? null
      : {
          validatePhone: {
            valid: false
          }
        };
  }

  validateNifCif(c: FormControl) {
    if (c.value === null || c.value === '') {
      return null;
    }

    var DNI_REGEX = /^(\d{8})([A-Z])$/;
    var CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    var NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
    let ret =
      DNI_REGEX.test(c.value.toUpperCase()) ||
      CIF_REGEX.test(c.value.toUpperCase()) ||
      NIE_REGEX.test(c.value.toUpperCase());
    return ret
      ? null
      : {
          validateNifCif: {
            valid: false
          }
        };
  }

  // toInteger(value: any): number {
  // 	return parseInt(`${value}`, 10);
  // }

  // toString(value: any): string {
  // 	return value !== undefined && value !== null ? `${value}` : '';
  // }

  // getValueInRange(value: number, max: number, min = 0): number {
  // 	return Math.max(Math.min(value, max), min);
  // }

  // isString(value: any): value is string {
  // 	return typeof value === 'string';
  // }

  // isNumber(value: any): value is number {
  // 	return !isNaN(this.toInteger(value));
  // }

  // isInteger(value: any): value is number {
  // 	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  // }

  // isDefined(value: any): boolean {
  // 	return value !== undefined && value !== null;
  // }

  // padNumber(value: number) {
  // 	if (this.isNumber(value)) {
  // 		return `0${value}`.slice(-2);
  // 	} else {
  // 		return '';
  // 	}
  // }

  // regExpEscape(text) {
  // 	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  // }

  // isValidDate(dateString) {
  // 	// First check for the pattern
  // 	var regex_date = /^\d{1,2}\-\d{1,2}\-\d{4}$/;

  // 	if (!regex_date.test(dateString)) {
  // 		return false;
  // 	}

  // 	// Parse the date parts to integers
  // 	var parts = dateString.split('-');
  // 	var day = parseInt(parts[0], 10);
  // 	var month = parseInt(parts[1], 10);
  // 	var year = parseInt(parts[2], 10);

  // 	// Check the ranges of month and year
  // 	if (year < 1000 || year > 3000 || month == 0 || month > 12) {
  // 		return false;
  // 	}

  // 	var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 	// Adjust for leap years
  // 	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
  // 		monthLength[1] = 29;
  // 	}

  // 	// Check the range of the day
  // 	return day > 0 && day <= monthLength[month - 1];
  // }

  // dateToCad(date: any): string {
  // 	const _result = `${this.isNumber(date.day) ? this.padNumber(date.day) : ''}-${
  // 		this.isNumber(date.month) ? this.padNumber(date.month) : ''
  // 	}-${date.year}`;
  // 	return _result;
  // }

  // dateToCadExt(date: Date): string {
  // 	const _result = `${this.isNumber(date.getDate()) ? this.padNumber(date.getDate()) : ''}-${
  // 		this.isNumber(date.getMonth() + 1) ? this.padNumber(date.getMonth() + 1) : ''
  // 	}-${date.getFullYear()}`;
  // 	return _result;
  // }

  // dateToCadNormalize(date: Date, hour: Date): string {
  // 	const _result = `${date.getFullYear()}${
  // 		this.isNumber(date.getMonth() + 1) ? this.padNumber(date.getMonth() + 1) : ''
  // 	}${this.isNumber(date.getDate()) ? this.padNumber(date.getDate()) : ''}${
  // 		this.isNumber(hour.getHours()) ? this.padNumber(hour.getHours()) : ''
  // 	}${this.isNumber(hour.getMinutes()) ? this.padNumber(hour.getMinutes()) : ''}`;
  // 	return _result;
  // }
}
