<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Material
 *
 * @property int $id
 * @property string $name
 * @property string $code
 * @property string|null $description
 * @property string $category
 * @property string $unit_of_measure
 * @property string $unit_cost
 * @property int $current_stock
 * @property int $minimum_stock
 * @property string|null $supplier
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Material newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Material newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Material query()
 * @method static \Illuminate\Database\Eloquent\Builder|Material whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Material whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Material whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Material whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Material lowStock()
 * @method static \Database\Factories\MaterialFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Material extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'code',
        'description',
        'category',
        'unit_of_measure',
        'unit_cost',
        'current_stock',
        'minimum_stock',
        'supplier',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'unit_cost' => 'decimal:2',
        'current_stock' => 'integer',
        'minimum_stock' => 'integer',
    ];

    /**
     * Scope a query to only include low stock materials.
     */
    public function scopeLowStock($query)
    {
        return $query->whereColumn('current_stock', '<=', 'minimum_stock');
    }
}