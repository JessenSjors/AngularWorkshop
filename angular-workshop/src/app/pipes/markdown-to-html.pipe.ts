import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdownToHtml'
})
export class MarkdownToHtmlPipe implements PipeTransform {
  transform(value: string): string {
    // Replace new line characters with <br> tags
    value = value.replace(/\n/g, '<br>');
  
    // Split the string into an array of lines
    let lines = value.split('<br>');
  
    // Remove any empty string at the beginning of the input value/text
    while (lines[0] === '') {
      lines = lines.slice(1);
    }

    // Process the lines to add headers and paragraphs
    let result = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      console.log(line);
      
      // If the line starts with a number, add a dash in front
      // if (line.match(/^\d+\./)) {
      //   result += ` - ${line}`;
      // }

      // Turn the first sentence into a primary header
      // if (i === 0) {
      //   result += `<title>${line.trim()}</title>`;
      // }

      // If a sentence ends with one or multiple '#' then turn it into a header
      if(line.startsWith('#')) {
        console.log('Starts with #');
        
        result += `<h1>${line.trim()}</h1>`;
      }
      else if(line.startsWith('##')) {
        console.log('Starts with ##');

        result += `<h2>${line.trim()}</h2>`;
      }
      else if(line.startsWith('###')) {
        console.log('Starts with ###');

        result += `<h3>${line.trim()}</h3>`;
      }

      // If the line is empty, create a paragraph element
      else if (line.trim() === '') {
        result += '<p></p>';
      }

      // // Otherwise, add the line as a paragraph
      // else {
      //   result += `<p>${line}</p>`;
      // }
    }
    return result;
  }
}
