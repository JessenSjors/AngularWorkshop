import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, Subscriber} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import { Hero } from 'src/app/interfaces/hero';

@Injectable({providedIn: 'root'})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.showObservableExamples();
  }

  private showObservableExamples(): void {
    //These are some additional examples of what you can do with Observables

    //  Update the value of count each second and trigger a notify to subscribers by using 'next'
    const clock$ = new Observable(function(observer){{
      // the observer is an object that is passed as an argument to the subscriber function when creating a new instance of an observable
      // and it's used to emit values, errors, and completion events from the observable.
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
  }});


    // subscribe to observable and callback each time the value is updated (subscriber will be notified) and the log the value
    // Callback is the response (in this case: when a new/next 'value' is emitted)
    clock$.subscribe(value => console.log(value));

    // value => { ... } is the callback that is executed when the next event is emitted by the observable,
    // it will update the data property with the response and log it to the console.

    const myObservable = new Observable(observer => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count);
        count++;
        if(count === 10) {
          observer.complete();
          clearInterval(intervalId);
        }
      }, 1000);
    });

    myObservable.subscribe({
      next: value => console.log(value),
      complete: () => console.log("Stream completed")
    });

    function testFunc(){};
    testFunc.rick = "Rick";
    testFunc.hugo = "Hugo";

    console.log(testFunc.rick + testFunc.hugo);

    function sayHello(name: string) {
      console.log(`Hello, ${name}!`);
    }

    //A function is a block of code that can be defined and invoked separately from any particular object.
    // Functions can be defined using the function keyword, and they can be called (invoked) using the function name followed by parentheses.
    // Functions can also be stored as a variable or passed as an argument to another function.

    // A method is a function that is associated with an object or class.
    // Methods can be defined inside an object literal, constructor function,
    // or class and they can be invoked using the dot notation.
    sayHello('John');
  }


  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHeroByName(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => { this.log('fetched heroes'); this.logHeroNames(heroes)} ),
        map(heroes => heroes.filter(hero => hero.name === 'Dr. Nice')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  logHeroNames(heroes: Hero[]): void {
    heroes.forEach(hero => {
      console.log(hero.name);
    });
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
