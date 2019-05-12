<template>
  <section>
    <v-container>
      <h1 class="title">Events</h1>
      <section class="cards">
        <v-card v-for="event in events" :key="event.id" class="card" width="240">
          <v-img :src="event.image" alt="Event Image"/>
          <v-card-text>
            <p class="card__title">{{ event.name }}</p>
            <p class="card__content">{{ event.time }}</p>
            <div class="card__action">
              <icon-tile icon="ic_place.svg" :content="event.place"/>
              <v-btn icon @click="clickedEvent = event">
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </section>
    </v-container>
    <v-slide-y-transition>
      <section v-if="clickedEvent" class="window">
        <header class="window__header">
          <v-container>
            <v-btn icon @click="clickedEvent = null">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <div class="event">
              <img
                class="event__image"
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                alt="Event Image"
              >
              <div class="event__content">
                <h1 class="event__name">JunctionX Seoul</h1>
                <icon-tile
                  icon="ic_clock.svg"
                  content="10 May at 9:00 AM to 12 May at 18:00 PM, 2019"
                />
                <icon-tile icon="ic_place.svg" content="Y-Valley, Yongsan-gu, Seoul, Korea"/>
              </div>
            </div>
            <v-tabs v-model="tab" class="tabs" grow slider-color="#ff3f3d">
              <v-tab href="#check-participants">Check Participants</v-tab>
              <v-tab href="#alert-participants">Alert Participants</v-tab>
            </v-tabs>
          </v-container>
        </header>
        <section class="window__content">
          <v-container>
            <v-tabs-items v-model="tab">
              <v-tab-item value="check-participants"></v-tab-item>
              <v-tab-item class="cards" value="alert-participants">
                <v-card
                  v-for="alert in clickedEvent.alerts"
                  :key="alert.id"
                  class="card"
                  width="240"
                >
                  <v-card-text>
                    <span class="label">{{ alert.category }}</span>
                    <p class="card__title card__title--mono">{{ alert.title }}</p>
                    <p class="card__content card__content--mono">{{ alert.content }}</p>
                    <div class="card__action">
                      <icon-tile icon="ic_clock.svg" content="re-alert"/>
                      <v-icon>keyboard_arrow_right</v-icon>
                    </div>
                  </v-card-text>
                </v-card>
                <v-card class="card card--create-alert" color="grey lighten-2" flat width="240">
                  <v-btn icon @click="alertWindowVisible = true">
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-container>
        </section>
      </section>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <section v-show="alertWindowVisible" class="horizontal-window">
        <header class="horizontal-window__header">
          <v-container>
            <v-btn icon @click="alertWindowVisible = false">
              <v-icon>close</v-icon>
            </v-btn>
            <section class="ma-3">
              <h1 class="event__name">Fill Your Alert Message</h1>
              <v-select
                v-model="requestType"
                color="#7676e8"
                :items="requestTypes"
                label="Choose type of your request."
                outline
              />
              <v-text-field color="#7676e8" label="Title"/>
              <v-layout>
                <v-flex sm6 pr-1>
                  <v-menu
                    ref="startDatePicker"
                    v-model="startDatePickerVisible"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="startDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="startDate" label="Start Date" readonly v-on="on"/>
                    </template>
                    <v-date-picker v-model="startDate" no-title scrollable>
                      <v-spacer/>
                      <v-btn flat color="#7676e8" @click="startDatePickerVisible = false">Cancel</v-btn>
                      <v-btn flat color="#7676e8" @click="$refs.startDatePicker.save(startDate)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6 pl-1>
                  <v-menu
                    ref="startTimePicker"
                    v-model="startTimePickerVisible"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="startTime"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="startTime" label="Start Time" readonly v-on="on"/>
                    </template>
                    <v-time-picker
                      v-if="startTimePickerVisible"
                      v-model="startTime"
                      full-width
                      @click:minute="$refs.startTimePicker.save(startTime)"
                    />
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex sm6 pr-1>
                  <v-menu
                    ref="endDatePicker"
                    v-model="endDatePickerVisible"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="endDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="endDate" label="End Date" readonly v-on="on"/>
                    </template>
                    <v-date-picker v-model="endDate" no-title scrollable>
                      <v-spacer/>
                      <v-btn flat color="#7676e8" @click="endDatePickerVisible = false">Cancel</v-btn>
                      <v-btn flat color="#7676e8" @click="$refs.endDatePicker.save(endDate)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6 pl-1>
                  <v-menu
                    ref="endTimePicker"
                    v-model="endTimePickerVisible"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="endTime"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field v-model="endTime" label="End Time" readonly v-on="on"/>
                    </template>
                    <v-time-picker
                      v-if="endTimePickerVisible"
                      v-model="endTime"
                      full-width
                      @click:minute="$refs.endTimePicker.save(endTime)"
                    />
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-text-field color="#7676e8" label="Location"/>
              <v-textarea color="#7676e8" label="Your Messages"/>
            </section>
            <v-btn color="#7676e8" dark depressed large>Send</v-btn>
          </v-container>
        </header>
        <section class="horizontal-window__content">
          <v-container>
            <section class="ma-3">
              <h1 class="event__name">Choose Recipients</h1>
              <v-data-table
                v-model="selectedParticipants"
                :headers="headers"
                :items="desserts"
                :search="search"
                hide-actions
                select-all
              >
                <template v-slot:items="props">
                  <td>
                    <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.calories }}</td>
                </template>
                <template v-slot:no-results>
                  <v-alert
                    :value="true"
                    color="error"
                    icon="warning"
                  >Your search for "{{ search }}" found no results.</v-alert>
                </template>
              </v-data-table>
            </section>
          </v-container>
        </section>
      </section>
    </v-slide-y-transition>
    <nav>
      <div class="item">
        <img class="item__image" src="https://picsum.photos/200" alt="Admin">
        <span class="item__name item__name--bold">Admin</span>
      </div>
      <div class="item">
        <img class="item__icon" src="ic_home.svg" alt="Home">
        <span class="item__name">Home</span>
      </div>
      <div class="item">
        <img class="item__icon" src="ic_event.svg" alt="Create an Event">
        <span class="item__name">Create an Event</span>
      </div>
      <div class="item">
        <img class="item__icon" src="ic_logout.svg" alt="Logout">
        <span class="item__name">Logout</span>
      </div>
    </nav>
  </section>
</template>

<script>
import IconTile from '@/components/IconTile'

export default {
  components: {
    IconTile
  },
  data() {
    return {
      tab: 'check-participants',
      clickedEvent: null,
      alertWindowVisible: false,
      requestType: '',
      requestTypes: ['Announcement', 'Pickup', 'Registration', 'ETC'],
      startDatePickerVisible: false,
      startDate: null,
      startTimePickerVisible: false,
      startTime: null,
      endDatePickerVisible: false,
      endDate: null,
      endTimePickerVisible: false,
      endTime: null,
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Phone', value: 'phone' }
      ],
      selectedParticipants: [],
      events: [
        {
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 6:00 PM, 2019',
          place: 'Y-Valley',
          alerts: [
            {
              category: 'Announcement',
              title: 'JunctionX is about to begin!',
              content:
                'When: May 10, 2019 at 8PM\nWhere: Y Valley\nSee you soon!'
            },
            {
              category: 'Announcement',
              title: 'JunctionX is about to begin!',
              content:
                'When: May 10, 2019 at 8PM\nWhere: Y Valley\nSee you soon!'
            },
            {
              category: 'Announcement',
              title: 'JunctionX is about to begin!',
              content:
                'When: May 10, 2019 at 8PM\nWhere: Y Valley\nSee you soon!'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  margin: 16px 0;
  color: #707070;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  color: #292929;
  margin: 8px;
}

.card__title {
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 500;
}

.card__content {
  font-size: 14px;
}

.card__action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window {
  position: absolute;
  top: 0;
  left: 0;
  right: 120px;
  bottom: 0;
  background-color: #f8f8f8;
}

.window__header {
  background-color: white;
}

.event {
  display: flex;
  margin: 32px 8px;
  flex-direction: row;
}

.event__image {
  width: 250px;
  height: 160px;
}

.event__content {
  display: flex;
  margin: 0 32px;
  flex-direction: column;
  justify-content: center;
}

.event__name {
  margin-bottom: 16px;
  color: #272727;
  font-size: 28px;
  font-weight: 700;
}

.event__time {
  color: #272727;
  font-size: 16px;
}

.event__place {
  color: #272727;
  font-size: 16px;
}

.tabs {
  width: 50%;
  margin-top: 36px;
}

.label {
  display: inline-block;
  padding: 4px 6px;
  margin: 6px 0;
  border: #4047f4 1px solid;
  border-radius: 12px;
  color: #4047f4;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}

.card__title--mono {
  color: #707070;
  font-size: 16px;
  font-weight: 700;
}

.card__content--mono {
  color: #707070;
  font-size: 16px;
}

.card--create-alert {
  display: flex;
  align-items: center;
  justify-content: center;
}

.horizontal-window {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 120px;
  bottom: 0;
  background-color: #f8f8f8;
  flex-direction: row;
}

.horizontal-window__header {
  width: 50%;
  height: 100%;
  background-color: white;
}

.horizontal-window__content {
  width: 50%;
  height: 100%;
  margin-top: 48px;
}

nav {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 120px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.item {
  display: flex;
  margin: 16px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.item__image {
  display: block;
  width: 36px;
  border-radius: 50%;
}

.item__icon {
  display: block;
  height: 28px;
}

.item__name {
  display: inline-block;
  margin: 8px 0;
  color: #707070;
  font-size: 10px;
}

.item__name.item__name--bold {
  font-weight: 500;
}
</style>
