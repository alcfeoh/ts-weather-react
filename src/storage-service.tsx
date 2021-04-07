const STORAGE_KEY = 'ZIPCODES';

export function getZipcodes(): string[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
}

export function addZipcode(zipcode: string): string[] {
    const zipcodes = getZipcodes();
    zipcodes.push(zipcode);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(zipcodes));
    return zipcodes;
}

export function removeZipcode(zipcode: string): string[] {
    let zipcodes = getZipcodes();
    zipcodes = zipcodes.filter(zip => zip != zipcode);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(zipcodes));
    return zipcodes;
}
