import { Pipe, PipeTransform } from '@angular/core';
import { marked } from "marked";
import MarkedOptions = marked.MarkedOptions;

@Pipe({
  name: 'markdownToHtml'
})
export class MarkdownToHtmlPipe implements PipeTransform {
  public transform(markdown: string, options?: MarkedOptions): string {
    if (markdown == null) return '';
    return marked(markdown, options);
  }

  public static setOptions(options: MarkedOptions): void {
      marked.setOptions(options);
  }
}
