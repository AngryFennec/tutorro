<template>
  <v-container>

    <v-list>
      <v-list-item
        v-for='student in students'
        :key='`student-${student.id}`'
      >
        <v-list-item-content>
          <v-row
            justify='center'
            align='center'>
            <v-col cols='8' sm='8' md='6'>
              <v-card>
                <v-avatar
                  class='ml-4 mt-2'
                  size='40'>
                  <v-img
                    alt='Avatar'
                    src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png'></v-img>
                </v-avatar>

                <strong class='pl-4'>{{ student.name }}</strong>

                <v-card-title class='text-h5'>
                  {{ student.title }}
                </v-card-title>

                <v-card-subtitle>{{ student.class }}</v-card-subtitle>

                <p class='pl-4'>Прогресс ученика</p>

                <v-progress-linear
                  v-model='student.progress'
                  height='25'
                  class='mb-4'
                >
                  <strong>{{ Math.ceil(student.progress) }}%</strong>
                </v-progress-linear>

                <v-card-actions>
                  <v-btn
                    color='primary'
                    outlined
                    rounded

                  >
                    Написать
                  </v-btn>

                  <v-btn
                    color='secondary'
                    outlined
                    rounded

                  >
                    Перейти к уроку
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-container>

</template>

<script lang='ts' src='./Students.ts'/>
<style lang='scss' src='./Students.scss'/>
