import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss'],
})
export class PostEntryComponent implements OnInit {
  postForm!: FormGroup;

  constructor(
    private _mdr: MatDialogRef<PostEntryComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initPostForm();
  }

  private initPostForm() {
    this.postForm = this.fb.group({
      userId: 0,
      id: 0,
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) return;

    form.patchValue({
      id: faker.datatype.number(),
      userId: faker.datatype.number(),
    });

    
  }

  CloseDialog() {
    this._mdr.close(false);
  }
}
