import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'tweetpipe'
})

export class TweetpipePipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if (arg.length > 0) {

      const result = [];
      for (const tweet of value) {
        const text: string = tweet.text;
        if (text.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          result.push(tweet);
        }
      }
      return result;
    }
  }

}




