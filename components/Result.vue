<template>
    <div class="result">
        <label>{{ obj.textresult }}</label>
        <div class="datedeaws">
            <div class="textdate">
                <p>งวดประจำวันที่</p>
                <div class="Issuedate">
                    <label>{{ obj.Issuedate }}</label>
                </div>
            </div>
        </div>
        <p>เลขที่ออก</p>

        <div v-if="displayMode === 'number'" class="datedeaws-number">
            <div class="lotterynumbers-01">
                {{ obj.lotterynumbers }}
            </div>
        </div>

        <div v-if="displayMode === 'bacc'" class="datedeaws-number">
            <div class="lotterynumbers-01">
                {{ obj.lotterynumbers }}
            </div>
        </div>

        <div v-if="displayMode === 'aomsin'" class="datedeaws-aomsin">
            <div class="lotterynumbers-aomsin">
                <label>{{ obj.lotterynumbers }}</label>
            </div>
            <div class="lotterynumbers-aomsin">
                <label>{{ obj.lotterynumbers }}</label>
            </div>
        </div>

        <div v-if="displayMode === 'number'" class="prize32-01">
            <div class="prize3-01">
                <div class="reward_3">
                    <span class="wrap-text">
                        รางวัล<br>เลข 3 ตัวล่าง
                    </span>
                    <div class="reward_3_01">
                        <div class="reward3_01">
                            <label>{{ obj.text_reward3_01 }}</label>
                        </div>
                        <div class="reward3_01">
                            <label>{{ obj.text_reward3_02 }}</label>
                        </div>
                    </div>
                    <div class="reward_3_01">
                        <div class="reward3_01">
                            <label>{{ obj.text_reward3_03 }}</label>
                        </div>
                        <div class="reward3_01">
                            <label>{{ obj.text_reward3_04 }}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="prize2-01">
                <span class="wrap-text">
                    รางวัล<br>เลข 2 ตัวล่าง
                </span>
                <div class="reward_2_01">
                    <label>{{ obj.ext_reward_2_01 }}</label>
                </div>
            </div>
        </div>

        <div v-if="displayMode === 'aomsin'" class="prize32-02">
            <div class="prize3-02">
                <span class="wrap2-text">
                    รางวัล<br>เลข 3 ตัวล่าง
                </span>
                <div class="reward3_02">
                    <label> {{ obj.textreward3_02 }} </label>
                </div>
            </div>
            <div class="prize3-02">
                <span class="wrap2-text">
                    รางวัล<br>เลข 2 ตัวล่าง
                </span>
                <div class="reward3_02">
                    <label> {{ obj.textreward2_02 }} </label>
                </div>
            </div>
        </div>

        <div v-if="displayMode === 'bacc'" class="prize32-03">
            <div class="prize3-03">
                <span class="wrap-text">
                    รางวัล<br>เลข 3 ตัวล่าง
                </span>
                <div class="reward_3_01">
                    <label> {{ obj.text_reward_3_03 }}</label>
                </div>
            </div>
            <div class="prize3-03">
                <span class="wrap-text">
                    รางวัล<br>เลข 3 ตัวล่าง
                </span>
                <div class="reward_3_01">
                    <label> {{ obj.text_reward_3_02 }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object,
            required: true,
            default: {}
        },
        displayMode: {
            type: String,
            required: true
        }
    }
};
</script>
