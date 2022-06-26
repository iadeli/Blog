import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { TableButtonAction } from '../../y-shared/interfaces/grid/tableButtonAction';
import { IPost } from '../models/IPost';
import { ManagePostStateService } from '../services/state/manage-post-state.service';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss'],
})
export class PostEntryComponent implements OnInit {
  postForm: FormGroup = this.fb.group({
    userId: 0,
    id: 0,
    title: ['', Validators.required],
    body: ['', Validators.required],
  });
  post!: IPost;

  constructor(
    private _mdr: MatDialogRef<PostEntryComponent>,
    private fb: FormBuilder,
    private postService: ManagePostStateService,
    @Inject(MAT_DIALOG_DATA) data: TableButtonAction
  ) {
    this.updatePostForm(data.value);
  }

  ngOnInit(): void {}

  updatePostForm(post: IPost) {
    if (post)
      this.postForm.patchValue({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
      });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) return;

    const newPost: IPost = {
      ...this.post,
      ...form.value,
    };

    if (newPost.id) {
      this.postService.update(newPost);
      this.CloseDialog();
    } else {
      newPost.id = faker.datatype.number();
      newPost.userId = faker.datatype.number();
      this.postService.create(newPost);
      this.CloseDialog();
    }
  }

  CloseDialog() {
    this._mdr.close(false);
  }
}
