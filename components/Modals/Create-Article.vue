<template>
    <b-modal id="bv-modal-create-article" hide-footer>
        <template #modal-title>
            Create Article
        </template>
        <form @submit.prevent="submitArticle">
            <div class="form-group">
                <label for="imageUpload">Upload Image:</label>
                <input
                    type="file"
                    id="imageUpload"
                    ref="imageInput"
                    accept="image/*"
                    @change="handleImageUpload"
                    name="image"
                />
                <img :src="article.imageUrl" name="image" alt="Uploaded Image" v-if="article.imageUrl" />
            </div>
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="article.Title" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="Link">Link:</label>
                <input type="text" id="Link" v-model="article.Link" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="Date">Date:</label>
                <input type="date" id="Date" v-model="article.Date" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="content">Content:</label>
                <textarea id="content" v-model="article.Content" class="form-control" required></textarea>
            </div>
            <div class="form-group">
                <label for="articleStatus">Article Status:</label>
                <select id="articleStatus" v-model="article.Status">
                    <option value="For Edit">For Edit</option>
                    <option value="Published">Published</option>
                </select>
            </div>
            <!-- Add more fields as needed -->
            <button type="submit" class="btn btn-primary">Save Article</button>
        </form>
    </b-modal>
</template>
<script>
import axios from 'axios';
import jQuery from 'jquery';

import { apiSaveArticles } from "~/api/getData.js";

export default {
    data(){
        return {
            article: {
                imageUrl: '',
                Title: '',
                Link: '',
                Date: '',
                Content: '',
                Status: '',
                Writer: 'Who Logged In',
                Editor: 'Editor 1',
                Company: 'ArchIntel',
            },
            showSuccessMessage: false,
            successMessage: '',
        };
    },
    methods: {
        async submitArticle() {                    
            const formData = new FormData();
            formData.append('image', this.article.imageUrl);
            formData.append('title', this.article.Title);
            formData.append('link', this.article.Link);
            formData.append('date', this.article.Date);
            formData.append('content', this.article.Content);
            formData.append('status', this.article.Status);
            formData.append('writer', this.article.Writer);
            formData.append('editor', this.article.Editor);
            formData.append('company', this.article.Company);

            try {
                console.log(this.article.imageUrl)
                const response = await axios.post(apiSaveArticles, formData);
                
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },

                console.log('Article saved successfully', response.data);
                this.displaySuccessMessage('Article saved successfully');
            } catch (error) {
                console.error('Error Saving Article', error);
            }

        },
        displaySuccessMessage(message) {
            this.successMessage = message;
            this.showSuccessMessage = true;

            setTimeout(() => {
                this.closeSuccessDialog();
                window.location.reload()
            }, 3000);
        },
        closeSuccessDialog() {
            this.showSuccessMessage = false;
        },
        handleImageUpload() {
            const file = this.$refs.imageInput.files[0];

            if (file) {
                this.article.imageUrl = URL.createObjectURL(file);
            } else {
                this.article.imageUrl = '';
            }
        },
    },


    // events: {
    //     eventShow_CreateArticle_Modal(field, title){
    //         jQuery("#Create-Article").modal("show");
    //     }
    // }
}

</script>