enum Month { Jan, Feb, March, April, May, June, July, Aug, Sep, Oct, Nov, Dec }

export const checkLength = (content: string, length: number): string => {
    if (content.length > length) {
        return content.slice(0, length) + '.......';
    } else {
        return content;
    }
}

export const getFormatedDate = (date: string): string => {
    const d = new Date(date);
    const day = d.getDate();
    const month = Month[d.getMonth()]
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
}

export const convertWord = (name: string | undefined) => {
    if (name) {
      return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  }