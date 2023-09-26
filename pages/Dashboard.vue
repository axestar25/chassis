<template>
    <div class="main-wrapper chassis-dashboard" style="padding: 0px; background-color: #fcfdfd">
		<template>
			<Navbar />
            <Sidebar />
		</template>
    </div>
</template>
<script>
import Navbar from "~/components/Layout/Navbar";
import Sidebar from "~/components/Layout/Sidebar";

export default {
    components: {
		Navbar,
        Sidebar,
	},
}
</script>