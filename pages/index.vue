<template>
  <section>
    <v-container>
      <h1 class="title">Upcoming Events</h1>
      <section class="cards">
        <v-card v-for="event in events.slice(0, 4)" :key="event.id" class="card" width="240">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"/>
          <v-card-text>
            <p class="card__title">{{ event.name }}</p>
            <p class="card__content">{{ event.time }}</p>
            <div class="card__action">
              <div class="button">
                <img class="button__icon" src="/ic_place.svg" alt="Place">
                <span class="button__name">{{ event.place }}</span>
              </div>
              <v-icon>keyboard_arrow_right</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </section>
      <h1 class="title">Past Events</h1>
      <section class="cards">
        <v-card v-for="event in events.slice(4)" :key="event.id" class="card" width="240">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"/>
          <v-card-text>
            <p class="card__title">{{ event.name }}</p>
            <p class="card__content">{{ event.time }}</p>
            <div class="card__action">
              <div class="button">
                <img class="button__icon" src="/ic_place.svg" alt="Place">
                <span class="button__name">{{ event.place }}</span>
              </div>
              <v-icon>keyboard_arrow_right</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </section>
    </v-container>
    <nav>
      <div class="item-wrapper">
        <div class="item">
          <img class="item__image" src="https://picsum.photos/200" alt="Admin">
          <span class="item__name item__name--bold">Admin</span>
        </div>
        <div class="item">
          <img class="item__icon" src="/ic_home.svg" alt="Home">
          <span class="item__name">Home</span>
        </div>
        <div class="item">
          <img class="item__icon" src="/ic_event.svg" alt="Create an Event">
          <span class="item__name">Create an Event</span>
        </div>
        <div class="item">
          <img class="item__icon" src="/ic_settings.svg" alt="Settings">
          <span class="item__name">Settings</span>
        </div>
        <div class="item">
          <img class="item__icon" src="/ic_logout.svg" alt="Logout">
          <span class="item__name">Logout</span>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
        },
        {
          name: 'JunctionX Seoul',
          time: '10 May at 9:00 AM to 12 May at 18:00 PM, 2019',
          place: 'Y-Valley'
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

.button {
  display: flex;
  align-items: center;
}

.button__icon {
  width: 20px;
}

.button__name {
  margin: 0 8px;
  color: #707070;
  font-size: 14px;
}

nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 120px;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 1;
}

.item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  width: 28px;
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
