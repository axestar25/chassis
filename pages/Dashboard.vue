<template>
    <div class="main-wrapper chassis-dashboard" style="padding: 0px; background-color: #fcfdfd">
        <SidebarCompany />
        <template>
            <Navbar />
            <Sidebar />
        </template>
        <div class="main-section d-flex">
            <div class="left-panel white-bg w-50 mx-3 my-3 box-shadow-default">
                <div class="left-inner-1 px-3 py-3">
                    <h5 class="mb-1">Welcome to Walbro Writer Dashboard</h5>
                    <p style="color: #bbbbbb;">Data as of Oct 9, 2021 10:00PM</p>

                    <button class="btn-create-article btn-primary">Create Article</button>
                </div>

                <div class="Customers">
                    <b-tabs content-class="mt-1">
                        <span class="blue-bg-with-text">Customers</span>
                        <b-tab title="TODAY (18)" active>
                            <div class="product-content d-flex mt-3" v-for="(item, index) in Customers" :key="index">
                                <div class="actions">
                                    <ul class="d-block pl-3">
                                        <li>
                                            <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-file" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product-info ml-4">
                                    <a href="javascript:void(0)" class="ProductName text-decoration-none">{{ item.CustomerName }}</a>
                                    <div class="rate mt-1 mb-1">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <p class="color-gray">
                                        <span class="w-100 float-left">Created on {{ item.DateCreated}} </span>
                                        <span class="w-100 float-left">[0 | 0] Source Date {{ item.SourceDate}} </span>
                                        <span class="w-100 float-left">Media Date {{ item.MediaDate}} </span>
                                    </p>
                                </div>
                                <div class="comment-icon d-flex vertical-align-middle align-items-center mx-3">
                                    <a href="javascript:void(0)"><img src="/img/comment.png" alt=""></a>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="ADVANCE (7)">
                            <p>TEST</p>
                        </b-tab>
                        <b-tab title="LAST 7 DAYS (46)">
                            <p>TEST</p>
                        </b-tab>
                        <b-tab title="SENT BACK (4)">
                            <p>TEST</p>
                        </b-tab>
                    </b-tabs>
                    <p v-if="Customers.length == 0" class="px-2 py-3 text-center mb-0">-No Customers Available-</p>
                </div>

                <div class="competitors">
                    <span class="blue-bg-with-text">Competitors</span>
                    <p v-if="Competitors.length == 0" class="px-2 py-3 text-center mb-0">-No Articles Available-</p>
                </div>

                <div class="products" v-if="Products.length != 0" v-loading="loading">
                    <span class="blue-bg-with-text">Products</span>
                    <div class="product-content d-flex mt-3" v-for="(item, index) in Products" :key="index">
                        <div class="actions">
                            <ul class="d-block pl-3">
                                <li>
                                    <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-file" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="product-info ml-4">
                            <a href="javascript:void(0)" class="ProductName text-decoration-none">{{ item.ProductName }}</a>
                            <div class="rate mt-1 mb-1">
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p class="color-gray">
                                <span class="w-100 float-left">Created on {{ item.DateCreated}} </span>
                                <span class="w-100 float-left">[0 | 0] Source Date {{ item.SourceDate}} </span>
                                <span class="w-100 float-left">Media Date {{ item.MediaDate}} </span>
                            </p>
                        </div>
                        <div class="comment-icon d-flex vertical-align-middle align-items-center mx-3">
                            <a href="javascript:void(0)" ><img src="/img/comment.png" alt=""></a>
                        </div>
                    </div>
                    <p v-if="Products.length == 0" class="px-2 py-3 text-center mb-0">-No Articles Available-</p>
                </div>
            </div>

            <div class="right-panel w-50 mx-3 my-3">
                <div class="rp-1 white-bg mb-3 box-shadow-default">
                    <h5 class="mb-1 px-3 py-3">Writer Production</h5>

                    <div class="row ml-0 mr-0">
                        <b-table
                            hover
                            :items="writerproduction"
                            :fields="fields"
                            :per-page="perPage"
                            :current-page="currentPage"
                            :responsive="true"
                            :busy="isBusy"
                            class="m-2"
                            :show-empty="writerproduction.length == 0">
                            <template slot="table-busy">
                                <div class="text-center text-success my-2">
                                    <b-spinner class="align-middle"></b-spinner>
                                    <strong>Loading...</strong>
                                </div>
                            </template>
                            <template #empty>
                                <div class="text-center">
                                    No Writers found.
                                </div>
                            </template>
                            <template v-slot:cell(Name)="row">
                                {{ "#"+row.item.name }}
                                {{ "#"+row.item }}
                            </template>
                            <template v-slot:cell(Assigned)="row">
                                {{ "#"+row.item.assigned }}
                            </template>
                            <template v-slot:cell(Submitted)="row">
                                {{ "#"+row.item.submitted }}
                            </template>
                        </b-table>
                        <!-- <div class="w-100" v-if="writerproduction.length > 0">
                            <b-pagination
                                v-model="currentPage"
                                :total-rows="writerproduction.length"
                                :per-page="perPage"
                                class="float-right green-pagination"
                                prev-text="Previous"
                                next-text="Next"
                                first-number
                                last-number
                            ></b-pagination>
                        </div> -->
                    </div>
                </div>

                <div class="rp-2 white-bg mb-3 box-shadow-default">
                    <h5 class="mb-1 px-3 py-3">Article List Preview</h5>
                    <div class="customer">
                        <span class="blue-bg-with-text">Customer</span>

                        <div v-if="Articles.length != 0" class="row ml-0 mr-0 px-3 py-3" v-loading="loading">
					        <div v-for="(item, index) in Articles" :key="index" class="d-flex mb-4">
                                <div class="art-img">
                                    <img src="img/archintel.jpg" alt="">
                                    <span class="safe-to-use d-block text-center my-2">Safe to Use</span>
                                    <span class="d-block text-center writer-name">{{ item.WriterName }}</span>

                                    <a href="javascript:void(0)" class="view-details d-block text-center mt-3 text-decoration-none">VIEW DETAILS</a>
                                </div>
                                <div class="Art-Content ml-3">
                                    <div class="art-title">
                                        <a href="javascript:void(0)" class="text-decoration-none">
                                            <span class="for-editing mr-2"><i v-if="item.ArtStatus == 'For Editing'" class="fa fa-pencil" aria-hidden="true"></i> {{ item.ArtStatus }}</span>
                                        </a>
                                        <a href="javascript:void(0)" class="ArtTitle text-decoration-none">{{ item.ArtTitle }}</a>
                                    </div>
                                    <p class="art-para color-gray mt-2">{{ item.ArtPara }}</p>
                                </div>
                            </div>
                        </div>
                        <p v-if="Articles.length == 0" class="px-2 py-3 text-center mb-0">-No Articles Available-</p>
                    </div>

                    <div class="competitors">
                        <span class="blue-bg-with-text">Competitors</span>
                        <p v-if="Competitors.length == 0" class="px-2 py-3 text-center mb-0">-No Articles Available-</p>
                    </div>

                    <div class="products">
                        <span class="blue-bg-with-text">Products</span>
                        
                        <p v-if="Products2.length == 0" class="px-2 py-3 text-center mb-0">-No Articles Available-</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Navbar from "~/components/Layout/Navbar";
import Sidebar from "~/components/Layout/Sidebar";
import SidebarCompany from "~/components/Layout/SidebarCompany";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data(){
    return {
        isBusy: false,
        writerproduction: [
            { name: "Writer User 1", assigned: "7", submitted: "7"},
            { name: "Writer User 2", assigned: "3", submitted: "2"},
        ],
        Articles: [
            {ArtImg: "/img/archintel.jpg", ArtTitle: "[TEST] testing duplicate images", ArtPara: "The quick brown fox jumops over the lazy dog. The quick brown fox jumops over the lazy dog.The quick brown fox jumops over the lazy dog.", ArtStatus: "For Editing", WriterName: "archintel"},
            {ArtImg: "/img/archintel.jpg", ArtTitle: "[TEST] testing duplicate images 2", ArtPara: "The quick brown fox jumops over the lazy dog. The quick brown fox jumops over the lazy dog.The quick brown fox jumops over the lazy dog.", ArtStatus: "Published", WriterName: "archintel"}
        ],
        Customers: [
            {CustomerName: "Deeside Golf Club bolster Toro fleet", Stars: 3, DateCreated: "Oct 8, 2021 3:12 PM", SourceDate: "Oct 7, 2021", MediaDate: "Oct 8, 2021"},
            {CustomerName: "REVIEW: 2021 Harley-Davidson Sportster $", Stars: 3, DateCreated: "Oct 8, 2021 2:31 PM", SourceDate: "Oct 7, 2021", MediaDate: "Oct 8, 2021"}
        ],
        Competitors: [],
        Products: [
            {ProductName: "TVS Jupiter 125 review, test ride", Stars: 4, DateCreated: "Oct 8, 2021 4:37 PM", SourceDate: "Oct 7, 2021", MediaDate: "Oct 8, 2021"}
        ],
        Products2: [],
        fields: [
            { key: "name", label: "Name",},
            { key: "assigned", label: "Assigned", sortable: false },
            { key: "submitted", label: "Submitted", sortable: false, thClass: "tdSubmitted" },
        ],
        currentPage: 1,
		perPage: 10,
    }
  }, 
  mounted() {

  }
};
</script>