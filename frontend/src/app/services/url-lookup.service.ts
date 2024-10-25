import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, forkJoin, switchMap} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonFilesService {

  private folderPath = 'assets/json/';
  private manifestFile = 'manifest.json';
  private fileUrlDictionary: { [key: string]: string } = {}; // Dictionary to store file-url mapping

  constructor(private http: HttpClient) { }


  getUrlDictionary(): { [key: string]: string } {
    return this.fileUrlDictionary;
  }

  // Function to load all JSON files dynamically from the manifest
  loadJsonFiles(): Observable<{ [key: string]: string }> {
    // First, load the manifest file that contains all the JSON file names
    return this.http.get<{ files: string[] }>(`${this.folderPath}${this.manifestFile}`).pipe(
      switchMap(manifest => {
        const jsonRequests: Observable<any>[] = manifest.files.map(fileName =>
          this.http.get<any[]>(`${this.folderPath}${fileName}`).pipe(
            map(data => {
              // For each JSON file, map the file to its URL
              data.forEach(item => {
                this.fileUrlDictionary[item.file] = item.url;
              });
            })
          )
        );

        // Execute all HTTP requests in parallel and return the result
        return forkJoin(jsonRequests).pipe(map(() => this.fileUrlDictionary));
      })
    );
  }
}
