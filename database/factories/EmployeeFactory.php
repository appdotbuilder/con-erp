<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $departments = ['Engineering', 'Construction', 'Management', 'Finance', 'HR', 'Safety', 'Quality'];
        $positions = [
            'Project Manager', 'Site Supervisor', 'Engineer', 'Architect', 'Electrician',
            'Plumber', 'Equipment Operator', 'Safety Officer', 'Quality Inspector',
            'Financial Analyst', 'HR Coordinator'
        ];

        return [
            'employee_id' => strtoupper($this->faker->bothify('EMP-###')),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'position' => $this->faker->randomElement($positions),
            'department' => $this->faker->randomElement($departments),
            'hourly_rate' => $this->faker->randomFloat(2, 15, 75),
            'hire_date' => $this->faker->dateTimeBetween('-5 years', 'now'),
            'status' => $this->faker->randomElement(['active', 'inactive', 'terminated']),
            'skills' => $this->faker->words(3, true),
        ];
    }
}