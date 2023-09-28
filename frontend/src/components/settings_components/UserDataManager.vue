<script setup>
import SubSettingTitile from '@cmp/settings_components/SubSettingTitile.vue';
import { checkMemory, getMemory, } from '@utl/sessionStorage'

const ex = ref(null)

// const exportDataTypes = []

function exportData()
{
    let text = 'Some data I want to export';
    let x = { subscribedChannels: checkMemory('subbedChannelsList') && getMemory('subbedChannelsList').toString() }
    // text = checkMemory('subbedChannelsList') && getMemory('subbedChannelsList').toString();
    text = JSON.stringify(x)

    let data = new Blob([text], { type: 'text/plain' });
    let url = window.URL.createObjectURL(data);

    // ex.value.attributes.href = url;
    ex.value.setAttribute('href', url)
    console.log(ex.value.attributes.href);
    ex.value?.click();
}

</script>

<template>
    <div class="group">
        <!-- <h2 class="text-2xl py-4 group-hover:bg-primary group-hover:bg-opacity-50"> -->
        <!-- <i class="ri-arrow-right-s-line"></i> -->
        <!-- <i class="ri-list-settings-line"></i> -->
        <!-- <i class="ri-settings-2-line"></i> -->
        <!-- <i class="ri-settings-line"></i> -->
        <!-- <i class="ri-settings-fill"></i> -->
        <!-- Manage your data here -->
        <!-- </h2> -->

        <SubSettingTitile>
            Manage your data here
        </SubSettingTitile>

        <!-- Clear History -->
        <div class="w-full grid grid-cols-2 gap-2 px-2">
            <div class="btn-group-horizontal my-2">
                <button class="btn hover:btn-primary bg-opacity-50 w-1/2">
                    Clear history
                    <i class="ri-close-line"></i>
                </button>
                <button class="btn hover:btn-primary bg-opacity-50 w-1/2">
                    Clear Data
                    <i class="ri-close-line"></i>
                </button>
            </div>

            <div class="btn-group-horizontal my-2">
                <!-- Import Data -->
                <button class=" relative btn hover:btn-primary bg-opacity-50 w-1/2">
                    <input type="file" class="absolute w-full h-full opacity-0" />
                    Import Data
                    <i class="ri-arrow-down-line"></i>
                </button>
                <!-- Export Data -->
                <button @click="exportData" class="btn hover:btn-primary bg-opacity-50 w-1/2">
                    Export Data
                    <i class="ri-arrow-up-line"></i>
                    <a ref="ex" href="" download="undefiend_data_export.txt"></a>
                </button>
            </div>
        </div>
    </div>
</template>

<!-- <a id="download_link" download="my_exported_file.txt" href=”” >Download as Text File</a> -->

<!-- let text = 'Some data I want to export';
let data = new Blob([text], {type: 'text/plain'});

let url = window.URL.createObjectURL(data);

document.getElementById('download_link').href = url; -->

<!-- let url = window.URL.createObjectURL(data);
window.URL.revokeObjectURL(url); -->

<!-- ----------------------------------------------------- -->

<!-- let text = 'Some data I want to export';
let data = new Blob([text], {type: 'text/plain'});

let url = window.URL.createObjectURL(data);

document.getElementById('download_link').href = url; -->
